import React from 'react';
import FeatureItem from './FeatureItem';

import { featureData } from './featureData';
import './FeatureList.scss';

const FeatureList = () => {
  return (
    <section className='features'>
      {featureData.map(feature => (
        <FeatureItem
          key={feature.id}
          id={feature.id}
          icon={feature.iconName}
          heading={feature.heading}
          text={feature.text}
        />
      ))}
    </section>
  );
};

export default FeatureList;
