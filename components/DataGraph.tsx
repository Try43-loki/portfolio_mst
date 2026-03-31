"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseR: number;
  phase: number;
  hub: boolean;
}

const NODE_COUNT = 26;
const MAX_DIST = 155;
const MAX_DIST_SQ = MAX_DIST * MAX_DIST;
const SPEED = 0.22;

function makeNodes(w: number, h: number): Node[] {
  return Array.from({ length: NODE_COUNT }, () => {
    const hub = Math.random() < 0.22;
    const angle = Math.random() * Math.PI * 2;
    const speed = SPEED * (0.55 + Math.random() * 0.9);
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      baseR: hub ? 3.2 : 1.4 + Math.random() * 1.4,
      phase: Math.random() * Math.PI * 2,
      hub,
    };
  });
}

export default function DataGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Desktop only — bail before touching the DOM on small screens
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let rafId: number;
    let nodes: Node[] = [];

    // ── Setup / resize ──────────────────────────────────────────────────────
    const setup = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      // setTransform resets any prior scale then applies dpr in one call
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = makeNodes(w, h);
    };

    setup();

    // ResizeObserver is more accurate than window "resize" for element sizing
    const ro = new ResizeObserver(() => setup());
    ro.observe(canvas);

    // ── Animation loop ───────────────────────────────────────────────────────
    const tick = (t: number) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      // Move nodes — wrap around edges with a small margin
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -12) n.x = w + 12;
        else if (n.x > w + 12) n.x = -12;
        if (n.y < -12) n.y = h + 12;
        else if (n.y > h + 12) n.y = -12;
      }

      // ── Edges ────────────────────────────────────────────────────────────
      // Batch all edges into a single path per alpha bucket to reduce
      // ctx.stroke() calls (big perf win vs. one stroke per edge)
      const BUCKETS = 5;
      const paths: Path2D[] = Array.from({ length: BUCKETS }, () => new Path2D());

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dSq = dx * dx + dy * dy;
          if (dSq >= MAX_DIST_SQ) continue;

          const ratio = 1 - Math.sqrt(dSq) / MAX_DIST; // 0–1, closer = higher
          const bucket = Math.min(BUCKETS - 1, Math.floor(ratio * BUCKETS));
          paths[bucket].moveTo(nodes[i].x, nodes[i].y);
          paths[bucket].lineTo(nodes[j].x, nodes[j].y);
        }
      }

      ctx.lineWidth = 0.6;
      for (let b = 0; b < BUCKETS; b++) {
        const alpha = ((b + 1) / BUCKETS) * 0.075;
        ctx.strokeStyle = `rgba(200,169,110,${alpha.toFixed(3)})`;
        ctx.stroke(paths[b]);
      }

      // ── Nodes ────────────────────────────────────────────────────────────
      for (const n of nodes) {
        const pulse = Math.sin(t * 0.0008 + n.phase);
        const r = n.baseR + (n.hub ? pulse * 0.9 : pulse * 0.3);

        if (n.hub) {
          // Faint glow ring
          ctx.beginPath();
          ctx.arc(n.x, n.y, r + 6, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(200,169,110,0.04)";
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(r, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = n.hub
          ? "rgba(200,169,110,0.22)"
          : "rgba(200,169,110,0.11)";
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
    />
  );
}
