import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ServiceMarquee from "@/components/ServiceMarquee";
import ServicesBento from "@/components/ServicesBento";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <ServiceMarquee />
      <ServicesBento />
      <About />
      <Gallery />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </main>
  );
}
