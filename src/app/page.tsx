import ConservationGraph from "@/components/ConservationGraph";
import FAQs from "@/components/FAQsSection";
import Hero from "@/components/Hero";
import HomeBlogs from "@/components/HomeBlogs";
import IntroTextSection from "@/components/IntroTextSection";
import { Navbar } from "@/components/NavBar";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
  <main className="bg-bgcolor">
    <Navbar />
    <Hero />
    <IntroTextSection />
    <OurServices />
    <WhyChooseUs />
    <ConservationGraph />
    <HomeBlogs />
    <Testimonials />
    <FAQs />
  </main>
  );
}
