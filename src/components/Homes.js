import React from 'react';

import './Homes.scss';

const Homes = () => {
  return (
    <section className='homes'>
      <div className='home'>
        <img
          src={`${process.env.PUBLIC_URL}/img/house-1.jpeg`}
          alt='House 1'
          className='home__img'
        ></img>
        <svg className='home__like'>
          <use xlinkHref='img/sprite.svg#icon-heart-full'></use>
        </svg>

        <h5 className='home__name'>Beautiful Family House</h5>
        <div className='home__location'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-map-pin'></use>
          </svg>
          <p>USA</p>
        </div>
        <div className='home__rooms'>
          <p>5 rooms</p>
        </div>
        <div className='home__area'>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          <p>$1.200,000</p>
        </div>
        <button className='btn home__btn'>Contact Realtor</button>
      </div>

      <div className='home'>Home card 2</div>
      <div className='home'>Home card 3</div>
      <div className='home'>Home card 4</div>
      <div className='home'>Home card 5</div>
      <div className='home'>Home card 6</div>
    </section>
  );
};

export default Homes;
