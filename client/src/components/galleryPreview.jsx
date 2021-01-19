/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import SampleImages from './galleryPreviewComponents/sampleImages.jsx';
import HomeDetails from './galleryPreviewComponents/homeDetails.jsx';
import HomeOptions from './galleryPreviewComponents/homeOptions.jsx';
import GallerySize from './galleryPreviewComponents/gallerySize.jsx';

const Wrapper = styled.div`
  display: 'flex';
`;

const Background = styled.div`
  display: 'flex';
`;

const Header = styled.div`
  display: 'flex';
`;

const Footer = styled.div`
  display: 'flex';
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
