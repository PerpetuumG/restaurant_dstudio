'use client';

import React, { useEffect, useState } from 'react';
import './specials.css';
import SectionTitle from '@/app/components/sectionTitle/SectionTitle';

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

  return (
    <section id={'specials'}>
      <div className={'container'} data-aos={'fade-up'}>
        <SectionTitle title={'Specials'} subtitle={'Check Our Specials'} />

        <div>1</div>

        <div>2</div>
      </div>
    </section>
  );
};

export default Specials;
