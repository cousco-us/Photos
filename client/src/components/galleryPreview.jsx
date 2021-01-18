/* eslint-disable react/prop-types */
import React from 'react';
import SampleImages from './galleryPreviewComponents/sampleImages.jsx';
import HomeDetails from './galleryPreviewComponents/homeDetails.jsx';
import HomeOptions from './galleryPreviewComponents/homeOptions.jsx';
import GallerySize from './galleryPreviewComponents/gallerySize.jsx';

const GalleryPreview = ({ images, tags, saved, openGallery }) => {
  // choose sampleImages more deliberately (might be a stretch goal)
  const sampleImages = images.slice(0, 3);
  return (
    <div>
      <SampleImages images={sampleImages} openGallery={openGallery} />
      <HomeDetails tags={tags} />
      <HomeOptions saved={saved} />
      <GallerySize size={images.length} openGallery={openGallery} />
      {/* <h1>GalleryPreview is under construction, check back soon!</h1> */}
    </div>
  );
};

export default GalleryPreview;
