import React from 'react';
import './whyUs.css';
import WhyUsCard from '@/app/components/whyUsCard/WhyUsCard';
import SectionTitle from '@/app/components/sectionTitle/SectionTitle';

const getWhyUsData = async () => {
  const res = await fetch('http://localhost:3000/api/whyus');
  return res.json();
};

const WhyUs = async () => {
  const items: [] = await getWhyUsData();

  return (
    <section id={'why-us'} className={'why-us'}>
      <div className={'container'}>
        <SectionTitle title={'Why us'} subtitle={'Why choose our restaurant'} />

        <div className={'row'}>
          {items &&
            items.length > 0 &&
            items.map((item: { id: number; title: string; content: string }) => (
              <WhyUsCard key={item.id} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
