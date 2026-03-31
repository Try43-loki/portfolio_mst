import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionCards from "@/components/SectionCards";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import RevealOnScroll from "@/components/RevealOnScroll";
import BackToTop from "@/components/BackToTop";
import Loader from "@/components/Loader";
import SectionDots from "@/components/SectionDots";

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <ScrollProgress />
      <BackToTop />
      <SectionDots />
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 pt-24">
        <Hero />
        <RevealOnScroll>
          <SectionCards />
        </RevealOnScroll>
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
        <RevealOnScroll>
          <Education />
        </RevealOnScroll>
        <RevealOnScroll>
          <Experience />
        </RevealOnScroll>
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
        {/* <RevealOnScroll>
          <Testimonials />
        </RevealOnScroll> */}
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
        <Footer />
      </main>
    </>
  );
}
