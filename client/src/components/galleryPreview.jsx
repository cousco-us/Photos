/* eslint-disable react/prop-types */
import React from 'react';

const GalleryPreview = ({ images, tags, saved }) => {
  // choose sampleImages more deliberately (might be a stretch goal)
  const sampleImages = images.slice(0, 3);

  return (
    <div>
      {/*
        <SampleImages images={sampleImages} onClick={openGallery}/>
        <HomeDetails tags={tags}/>
        <HomeOptions saved={saved}/>
        <GallerySize size={images.length} openGallery={this.openGallery}/>
      */}
      <h1>GalleryPreview is under construction, check back soon!</h1>
    </div>
  );
};

export default GalleryPreview;
