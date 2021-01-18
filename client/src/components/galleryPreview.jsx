/* eslint-disable react/prop-types */
import React from 'react';

const GalleryPreview = ({ images }) => {
  const sampleImages = images.slice(0, 3);
  return (
    <div>
      <img src={sampleImages[0]} alt="firstPic" width="900" height="600" />
    </div>
  );
};

export default GalleryPreview;
