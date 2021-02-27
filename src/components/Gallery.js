import React from 'react';
import { imageData } from './galleryData';

import './Gallery.scss';

const Gallery = () => {
  return (
    <section className='gallery'>
      {imageData.map(image => (
        <figure
          className={`gallery__item gallery__item--${image.id}`}
          key={image.id}
        >
          <img
            src={image.imgUrl}
            alt={`Gallery ${image.id}`}
            className='gallery__img'
          />
        </figure>
      ))}
    </section>
  );
};

export default Gallery;
