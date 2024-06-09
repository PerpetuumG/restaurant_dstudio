import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import './galleryItem.css';
import Image from 'next/image';

const GalleryItem = ({
  item,
}: {
  item: {
    id: number;
    image: string;
  };
}) => {
  useEffect(() => {
    new GLightbox({
      selector: '.gallery-lightbox',
    });
  }, []);

  return (
    <div className={'col-lg-3 col-md-4'}>
      <div className={'gallery-item'}>
        <a href={item.image} className={'gallery-lightbox'} data-gall={'gallery-item'}>
          <Image
            src={item.image}
            alt={''}
            width={500}
            height={300}
            style={{ width: '100%', height: 'auto' }}
            className={'img-fluid'}
          />
        </a>
      </div>
    </div>
  );
};

export default GalleryItem;
