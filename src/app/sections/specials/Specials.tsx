'use client';

import React, { useEffect, useState } from 'react';
import './specials.css';
import SectionTitle from '@/app/components/sectionTitle/SectionTitle';
import { specialsFilters } from '@/app/data/data';
import Preloader from '@/app/components/preloader/Preloader';
import SpecialItems from '@/app/components/specialItem/SpecialItems';

const Specials = () => {
  const [data, setData] = useState<any | []>([]);
  const [items, setItems] = useState<any | []>([]);

  const getSpecialsData = () => {
    fetch('http://localhost:3000/api/specials')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    getSpecialsData();
  }, []);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleFilterActive = (id: number) => {
    specialsFilters.map(filter => {
      filter.active = false;
      if (filter.id === id) filter.active = true;
    });
  };

  const handleSpecialChange = (id: number) => {
    handleFilterActive(id)

    const updatedItems = items.map(
      (item: {
        id: number;
        image: string;
        title: string;
        subtitle: string;
        content: string;
        active: boolean;
      }) => {
        item.active = false;
        if (item.id === id) item.active = true;
        return item;
      },
    );

    setItems(updatedItems);
  };

  return (
    <section id={'specials'} className={'specials'}>
      <div className={'container'} data-aos={'fade-up'}>
        <SectionTitle title={'Specials'} subtitle={'Check Our Specials'} />

        <div className={'row'} data-aos={'fade-up'} data-aos-delay={'100'}>
          <div className='col-lg-3'>
            <ul className='nav nav-tabs flex-column'>
              {specialsFilters.map(filter => (
                <li className={'nav-item'} key={filter.id}>
                  <a
                    className={`nav-link ${filter.active ? 'active show' : ''}`}
                    onClick={() => handleSpecialChange(filter.id)}
                  >
                    {filter.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={'col-lg-9 mt-4 mt-lg-0'}>
            <div className='tab-content'>
              {!items ? (
                <Preloader />
              ) : items.length > 0 ? (
                items.map(
                  (item: {
                    id: number;
                    image: string;
                    title: string;
                    subtitle: string;
                    content: string;
                    active: boolean;
                  }) => <SpecialItems key={item.id} item={item} />,
                )
              ) : (
                <Preloader />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
