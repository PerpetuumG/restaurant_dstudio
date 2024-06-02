import React from 'react';
import aboutImage from '../../../../public/assets/images/about.jpg';
import './about.css';
import Image from 'next/image';

const About = () => {
  return (
    <section id={'about'} className={'about'}>
      <div className={'container'} data-aos={'fade-up'}>
        <div className={'row'}>
          <div
            className={'col-lg-6 order-1 order-lg-2'}
            data-aos={'zoom-in'}
            data-aos-delay={'100'}
          >
            <div className={'about-img'}>
              <Image src={aboutImage} alt={'restaurant'} />
            </div>
          </div>

          <div className={'col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content'}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, odit.</h3>

            <p className={'fst-italic'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci
              architecto consectetur dicta distinctio dolore
            </p>

            <ul>
              <li>
                <i className={'bi bi-check-circle'}></i>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aliquam, quas?
              </li>
              <li>
                <i className={'bi bi-check-circle'}></i>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aliquam, quas?
              </li>
              <li>
                <i className={'bi bi-check-circle'}></i>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Asperiores, corporis dolor earum eum facere, fugiat harum, maiores
                obcaecati possimus quod repellat tempora veniam voluptate. At blanditiis enim
                sapiente voluptatem voluptates?
              </li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aut
              autem beatae commodi dicta dolorem eligendi est, excepturi fugit illum ipsam molestias
              nesciunt nihil officia omnis possimus provident quam quidem quisquam sapiente suscipit
              tempora totam unde voluptatum. Corporis, facilis voluptatum? Commodi laboriosam,
              maxime possimus praesentium quaerat quia ullam voluptatem!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
