import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import Transformations from "@/components/Transformations";
import Stylists from "@/components/Stylists";
import WhyVelora from "@/components/WhyVelora";
import Testimonials from "@/components/Testimonials";
import InstagramGrid from "@/components/InstagramGrid";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Transformations />
        <Stylists />
        <WhyVelora />
        <Testimonials />
        <InstagramGrid />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
