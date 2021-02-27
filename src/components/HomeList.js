import React from 'react';
import HomeItem from './HomeItem';

import { homeData } from './homeData';
import './HomeList.scss';

const HomeList = () => {
  return (
    <section className='homes'>
      {homeData.map(home => (
        <HomeItem
          key={home.id}
          id={home.id}
          imgName={home.imgName}
          homeName={home.homeName}
          location={home.location}
          rooms={home.rooms}
          size={home.size}
          price={home.price}
        />
      ))}
    </section>
  );
};

export default HomeList;
