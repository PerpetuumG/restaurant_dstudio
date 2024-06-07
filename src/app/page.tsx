import Hero from '@/app/sections/hero/Hero';
import About from '@/app/sections/about/About';
import WhyUs from '@/app/sections/whyUs/WhyUs';
import Menu from '@/app/sections/menu/Menu';
import Specials from '@/app/sections/specials/Specials';
import Events from '@/app/sections/events/Events';

export default function Home() {
  return (
    <>
      <Hero />
      <main id={'main'}>
        <About />
        <WhyUs />
        <Menu />
        <Specials />
        <Events/>
      </main>
    </>
  );
}
