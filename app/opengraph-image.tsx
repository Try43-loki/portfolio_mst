import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const runtime = "edge";
export const alt = "MEY Soytry — Frontend Developer & Data Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Load Playfair Display Bold from Google Fonts
  let playfairData: ArrayBuffer | null = null;
  try {
    const cssRes = await fetch(
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    const css = await cssRes.text();
    const match = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/);
    if (match?.[1]) {
      playfairData = await fetch(match[1]).then((r) => r.arrayBuffer());
    }
  } catch (_) {}

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a08",
          display: "flex",
          flexDirection: "column",
          padding: "64px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle top-left corner accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 120,
            height: 2,
            background:
              "linear-gradient(to right, #c8a96e, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 2,
            height: 120,
            background:
              "linear-gradient(to bottom, #c8a96e, transparent)",
          }}
        />
        {/* Bottom-right corner accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 120,
            height: 2,
            background:
              "linear-gradient(to left, #c8a96e, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 2,
            height: 120,
            background:
              "linear-gradient(to top, #c8a96e, transparent)",
          }}
        />

        {/* Main layout — left content + right monogram */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            gap: 80,
          }}
        >
          {/* ── Left column ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: 0,
            }}
          >
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 1,
                  background: "#c8a96e",
                }}
              />
              <span
                style={{
                  color: "#c8a96e",
                  fontSize: 13,
                  letterSpacing: "0.2em",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                }}
              >
                Portfolio · 2026
              </span>
            </div>

            {/* Name */}
            <div
              style={{
                color: "#f0ede6",
                fontSize: 80,
                fontWeight: 700,
                fontFamily: playfairData ? "Playfair" : "Georgia, serif",
                lineHeight: 1.05,
                letterSpacing: "-2px",
                marginBottom: 20,
              }}
            >
              MEY Soytry
            </div>

            {/* Title */}
            <div
              style={{
                color: "#c8a96e",
                fontSize: 22,
                fontFamily: "monospace",
                letterSpacing: "0.04em",
                marginBottom: 40,
              }}
            >
              Frontend Developer &amp; Data Analyst
            </div>

            {/* Divider */}
            <div
              style={{
                width: 56,
                height: 1,
                background: "#c8a96e",
                marginBottom: 28,
                opacity: 0.6,
              }}
            />

            {/* Meta */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginBottom: 44,
              }}
            >
              <span
                style={{
                  color: "#7a7870",
                  fontSize: 16,
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                }}
              >
                📍 {profile.location}
              </span>
              <span
                style={{
                  color: "#7a7870",
                  fontSize: 16,
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                }}
              >
                ✉ {profile.email}
              </span>
            </div>

            {/* Available badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(200,169,110,0.07)",
                border: "1px solid rgba(200,169,110,0.2)",
                borderRadius: 4,
                padding: "10px 18px",
                width: "fit-content",
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#4ade80",
                }}
              />
              <span
                style={{
                  color: "#c8a96e",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                }}
              >
                Open to Opportunities
              </span>
            </div>
          </div>

          {/* ── Right — MS monogram ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 180,
                height: 180,
                border: "1px solid rgba(200,169,110,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                background: "rgba(200,169,110,0.04)",
              }}
            >
              {/* Corner ticks */}
              <div style={{ position: "absolute", top: -2, left: -2, width: 18, height: 18, borderTop: "2px solid #c8a96e", borderLeft: "2px solid #c8a96e" }} />
              <div style={{ position: "absolute", top: -2, right: -2, width: 18, height: 18, borderTop: "2px solid #c8a96e", borderRight: "2px solid #c8a96e" }} />
              <div style={{ position: "absolute", bottom: -2, left: -2, width: 18, height: 18, borderBottom: "2px solid #c8a96e", borderLeft: "2px solid #c8a96e" }} />
              <div style={{ position: "absolute", bottom: -2, right: -2, width: 18, height: 18, borderBottom: "2px solid #c8a96e", borderRight: "2px solid #c8a96e" }} />

              <span
                style={{
                  color: "#c8a96e",
                  fontSize: 62,
                  fontWeight: 700,
                  fontFamily: playfairData ? "Playfair" : "Georgia, serif",
                  letterSpacing: "-3px",
                  lineHeight: 1,
                }}
              >
                MS
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: playfairData
        ? [
            {
              name: "Playfair",
              data: playfairData,
              weight: 700 as const,
              style: "normal" as const,
            },
          ]
        : [],
    }
  );
}
