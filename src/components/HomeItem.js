import React from 'react';

import './HomeItem.scss';

const HomeItem = ({ id, imgName, homeName, location, rooms, size, price }) => {
  return (
    <div className='home'>
      <img
        src={`${process.env.PUBLIC_URL}/img/${imgName}`}
        alt='house'
        className='home__img'
      />
      <svg className='home__like'>
        <use
          xlinkHref={`${process.env.PUBLIC_URL}/img/sprite.svg#icon-heart-full`}
        />
      </svg>

      <h5 className='home__name'>{homeName}</h5>
      <div className='home__location'>
        <svg>
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/img/sprite.svg#icon-map-pin`}
          />
        </svg>
        {location}
      </div>
      <div className='home__rooms'>
        <svg>
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/img/sprite.svg#icon-profile-male`}
          />
        </svg>
        {rooms}
      </div>
      <div className='home__area'>
        <svg>
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/img/sprite.svg#icon-expand`}
          />
        </svg>
        {size}
      </div>
      <div className='home__price'>
        <svg>
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/img/sprite.svg#icon-key`}
          />
        </svg>
        {price}
      </div>
      <button className='btn home__btn'>Contact Realtor</button>
    </div>
  );
};

export default HomeItem;
