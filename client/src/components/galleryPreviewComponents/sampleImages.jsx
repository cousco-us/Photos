import React from 'react';

const SampleImages = ({ images }) => (
  <div>
    <h1>SampleImages</h1>
    <img className="sample-image-big" src={images[0]} alt="main images of preview" height="435" width="700" />
    <img className="sample-image-top" src={images[1]} alt="main images of preview" height="210" width="250" />
    <img className="sample-image-bottom" src={images[2]} alt="main images of preview" height="210" width="250" />
  </div>
);

export default SampleImages;
