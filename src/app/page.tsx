import Hero from '@/app/sections/hero/Hero';
import About from '@/app/sections/about/About';
import WhyUs from '@/app/sections/whyUs/WhyUs';
import Menu from '@/app/sections/menu/Menu';

export default function Home() {
  return (
    <>
      <Hero />
      <main id={'main'}>
        <About />
        <WhyUs />
        <Menu/>
      </main>
    </>
  );
}
