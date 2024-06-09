import React from 'react';
import './gallery.css';
import SectionTitle from '@/app/components/sectionTitle/SectionTitle';

const Gallery = () => {
  return (
    <section id={'gallery'}>
      <div className={'container'} data-aos={'fade-up'}>
        <SectionTitle title={'Gallery'} subtitle={'Some photos from Our Restaurant'} />

        <div>
          Photos
        </div>
      </div>
    </section>
  );
};

export default Gallery;
