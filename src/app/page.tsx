import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ScrollVideo from "@/components/ScrollVideo";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <HeroCarousel />
        <ScrollVideo />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
