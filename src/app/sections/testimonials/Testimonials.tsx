import React from 'react';
import './testimonials.css';
import SectionTitle from '@/app/components/sectionTitle/SectionTitle';

const Testimonials = () => {
  return (
    <section className={'testimonials'}>
      <div className={'container'} data-aos={'fade-up'}>
        <SectionTitle title={'Testimonials'} subtitle={`What they' saying about us`} />

        <div className={''}></div>
      </div>
    </section>
  );
};

export default Testimonials;
