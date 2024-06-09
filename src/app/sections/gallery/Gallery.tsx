'use client';

import React, { useEffect, useState } from 'react';
import './gallery.css';
import SectionTitle from '@/app/components/sectionTitle/SectionTitle';
import GalleryItem from '@/app/components/galleryItem/GalleryItem';
import Preloader from '@/app/components/preloader/Preloader';

const Gallery = () => {
  const [images, setImages] = useState<any | []>([]);

  const getGalleryData = () => {
    fetch('http://localhost:3000/api/gallery')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(e => console.error(e.message));
  };

  useEffect(() => {
    getGalleryData();
  }, []);

  return (
    <section id={'gallery'} className={'gallery'}>
      <div className={'container'} data-aos={'fade-up'}>
        <SectionTitle title={'Gallery'} subtitle={'Some photos from Our Restaurant'} />
      </div>

      <div className={'container-fluid'} data-aos={'fade-up'} data-aos-delay={'100'}>
        <div className={'row g-0'}>
          {!images ? (
            <Preloader />
          ) : images.length > 0 ? (
            images.map((image: { id: number; image: string }) => (
              <GalleryItem key={image.id} item={image} />
            ))
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
