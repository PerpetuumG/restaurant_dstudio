'use client';

import React, { useState, useEffect } from 'react';

// Import Swiper React Component
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import './testimonials.css';
import SectionTitle from '@/app/components/sectionTitle/SectionTitle';
import TestimonialsItem from '@/app/components/testimonialsItem/TestimonialsItem';

const Testimonials = () => {
  const [slides, setSlides] = useState<any | []>([]);

  const getTestimonialsData = () => {
    fetch('http://localhost:3000/api/testimonials')
      .then(res => res.json())
      .then(data => setSlides(data))
      .catch(e => console.error(e.message));
  };

  useEffect(() => {
    getTestimonialsData();
  }, []);

  return (
    <section id={'testimonials'} className={'testimonials section-bg'}>
      <div className={'container'} data-aos={'fade-up'}>
        <SectionTitle title={'Testimonials'} subtitle={`What they' saying about us`} />

        <div data-aos={'fade-up'} data-aos-delay={'100'}>
          <Swiper
            slidesPerView={'auto'}
            speed={600}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: '.testimonials-swiper-pagination',
              type: 'bullets',
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className={'testimonials-slider swiper-container'}
          >
            {slides &&
              slides.length > 0 &&
              slides.map(
                (slide: {
                  id: number;
                  content: string;
                  avatar: string;
                  client: string;
                  position: string;
                }) => (
                  <SwiperSlide key={slide.id}>
                    <TestimonialsItem item={slide} />
                  </SwiperSlide>
                ),
              )}
          </Swiper>
          <div className={'testimonials-swiper-pagination'}></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
