/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import SampleImages from './galleryPreviewComponents/sampleImages.jsx';
import HomeDetails from './galleryPreviewComponents/homeDetails.jsx';
import HomeOptions from './galleryPreviewComponents/homeOptions.jsx';
import GallerySize from './galleryPreviewComponents/gallerySize.jsx';

const Wrapper = styled.div`
  /* max-width: 992px;
  max-height: 500px;
  align-content: center; */
  max-height: 460px;
  max-width: 952px;
  width: 100%;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
`;

const Background = styled.div`
  max-width: 992px;
  z-index: 0;
  position: relative;
`;

const Header = styled.span`
  z-index: 1;
  position: relative;
  width: 100%;
  top: -455px;
  margin-left: 5px;
  display: flex;
  justify-content: space-between;
`;

const Footer = styled.span`
  z-index: 1;
  position: relative;
  top: -75px;
  display: flex;
  padding: 0 10px;
  max-width: 50px;
  height: 28px;
  left: 92%;
`;

const GalleryPreview = ({ images, tags, saved, openGallery }) => {
  // choose sampleImages more deliberately (might be a stretch goal)
  const sampleImages = images.slice(0, 3);
  return (
    <Wrapper>
      <Background>
        <SampleImages images={sampleImages} openGallery={openGallery} />
      </Background>
      <Header>
        <HomeDetails tags={tags} />
        <HomeOptions saved={saved} />
      </Header>
      <Footer>
        <GallerySize size={images.length} openGallery={openGallery} />
      </Footer>
    </Wrapper>
  );
};

export default GalleryPreview;
