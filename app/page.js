
// import Hero from '../components/Hero';
 // import Features from '../components/Features';
 import Footer from '../components/Footer';
 import HowItWorks from '@/components/HowItWorks';

import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <>

     <section id="features">
        <Features />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>
      {/* <section id="contact">
        <ContactUs />
      </section> */}

      <Footer />


    </>
  );
}
