import Hero from '@/app/sections/hero/Hero';
import About from '@/app/sections/about/About';
import WhyUs from '@/app/sections/whyUs/WhyUs';
import Menu from '@/app/sections/menu/Menu';
import Specials from '@/app/sections/specials/Specials';
import Events from '@/app/sections/events/Events';
import Booking from '@/app/sections/booking/Booking';
import Testimonials from '@/app/sections/testimonials/Testimonials';
import Gallery from '@/app/sections/gallery/Gallery';
import Chefs from '@/app/sections/chefs/Chefs';

export default function Home() {
  return (
    <>
      <Hero />
      <main id={'main'}>
        <About />
        <WhyUs />
        <Menu />
        <Specials />
        <Events />
        <Booking />
        <Testimonials />
        <Gallery />
        <Chefs/>
      </main>
    </>
  );
}
