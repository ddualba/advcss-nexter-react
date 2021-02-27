import React from 'react';

import './Story.scss';

const StoryPictures = () => {
  return (
    <div className='story__pictures'>
      <img
        src={`${process.env.PUBLIC_URL}/img/story-1.jpeg`}
        alt='Couple with new house'
        className='story__img--1'
      />
      <img
        src={`${process.env.PUBLIC_URL}/img/story-2.jpeg`}
        alt='New house'
        className='story__img--2'
      />
    </div>
  );
};

export default StoryPictures;
