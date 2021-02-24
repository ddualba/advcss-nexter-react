import React from 'react';
import { ReactComponent as IconGlobal } from './icons/icon-global.svg';
import { ReactComponent as IconTrophy } from './icons/icon-trophy.svg';
import { ReactComponent as IconKey } from './icons/icon-key.svg';
import { ReactComponent as IconLock } from './icons/icon-lock.svg';
import { ReactComponent as IconMapPin } from './icons/icon-map-pin.svg';
import { ReactComponent as IconPresentation } from './icons/icon-presentation.svg';

import './Features.scss';

const Features = () => {
  return (
    <section className='features'>
      <div className='feature'>
        <IconGlobal className='feature__icon' />
        {/* <svg className='feature__icon'>
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/img/sprite.svg#icon-global`}
          />
        </svg> */}

        <h4 className='heading-4 heading-4--dark'>World's best luxury homes</h4>
        <p className='feature__text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus.
        </p>
      </div>

      <div className='feature'>
        <IconTrophy className='feature__icon' />
        <h4 className='heading-4 heading-4--dark'>Only the best properties</h4>
        <p className='feature__text'>
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
          rerum sed a eligendi aut quia.
        </p>
      </div>

      <div className='feature'>
        <IconMapPin className='feature__icon' />
        <h4 className='heading-4 heading-4--dark'>
          All homes in in top locations
        </h4>
        <p className='feature__text'>
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem
          consequatur harum.
        </p>
      </div>

      <div className='feature'>
        <IconKey className='feature__icon' />
        <h4 className='heading-4 heading-4--dark'>New home in one week</h4>
        <p className='feature__text'>
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
      </div>

      <div className='feature'>
        <IconPresentation className='feature__icon' />
        <h4 className='heading-4 heading-4--dark'>Top 1% realtors</h4>
        <p className='feature__text'>
          Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </p>
      </div>

      <div className='feature'>
        <IconLock className='feature__icon' />
        <h4 className='heading-4 heading-4--dark'>Secure payments on nexter</h4>
        <p className='feature__text'>
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
          quae.
        </p>
      </div>
    </section>
  );
};

export default Features;
