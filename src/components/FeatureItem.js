import React from 'react';

import './FeatureItem.scss';

const FeatureItem = ({ id, icon, heading, text }) => {
  return (
    <div className='feature'>
      <svg className='feature__icon'>
        <use
          xlinkHref={`${process.env.PUBLIC_URL}/img/sprite.svg#icon-${icon}`}
        />
      </svg>
      <h4 className='heading-4 heading-4--dark'>{heading}</h4>
      <p className='feature__text'>{text}</p>
    </div>
  );
};

export default FeatureItem;
