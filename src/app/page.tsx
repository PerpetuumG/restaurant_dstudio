import Hero from '@/app/sections/hero/Hero';
import About from '@/app/sections/about/About';

export default function Home() {
  return (
    <>
      <Hero />
      <main id={'main'}>
        <About />
      </main>
    </>
  );
}
