import React from 'react';
import './chefs.css';
import SectionTitle from '@/app/components/sectionTitle/SectionTitle';
import Preloader from '@/app/components/preloader/Preloader';
import ChefsItem from '@/app/components/chefsItem/ChefsItem';

const getChiefsData = async () => {
  const res = await fetch('http://localhost:3000/api/chefs');
  return res.json();
};

const Chefs = async () => {
  const items: [] = await getChiefsData();

  return (
    <section id={'chefs'} className={'chefs'}>
      <div className='container' data-aos={'fade-up'}>
        <SectionTitle title={'Chefs'} subtitle={'Our Professional chefs'} />

        <div className={'row'}>
          {!items ? (
            <Preloader />
          ) : items.length > 0 ? (
            items.map(
              (item: {
                id: number;
                name: string;
                photo: string;
                position: string;
                delay: string;
              }) => <ChefsItem key={item.id} item={item} />,
            )
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
