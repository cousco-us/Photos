/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import SampleImages from './galleryPreviewComponents/sampleImages.jsx';
import HomeDetails from './galleryPreviewComponents/homeDetails.jsx';
import HomeOptions from './galleryPreviewComponents/homeOptions.jsx';
import GallerySize from './galleryPreviewComponents/gallerySize.jsx';
import GalleryModal from './galleryModal.jsx';

const modalRoot = document.getElementById('modal-root');
const appRoot = document.getElementById('app');
const openGallery = () => {
  console.log('GOT CLICKED');
  modalRoot.setAttribute('style', "position: fixed; top: 50%; left: 50%;transform: translate(-50%, -50%); width: 100%; height: 100%;");
  modalRoot.style['background-color'] = 'rgba(0, 0, 0, 0.6)';
  modalRoot.addChild(<GalleryModal home={currentHome} saved={saved} />);
  appRoot.style.filter = 'blur(20px)';
};

const closeGallery = () => {
  appRoot.style.filter = '';
  appRoot.style['background-color'] = 'rgba(0, 0, 0, 0)';
  modalRoot.innerHTML('');
};

const Wrapper = styled.div`
  max-height: 460px;
  margin-bottom: 20px;
  flex: 1;
  width: 100%;
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
  top: -78px;
  display: flex;
  padding: 0 17px;
  max-width: 60px;
  height: 28px;
  left: 92%;
`;

const GalleryPreview = ({ images, tags, saved, handleSaveClick }) => {
  // choose sampleImages more deliberately (might be a stretch goal)
  const sampleImages = images.slice(0, 3);
  return (
    <Wrapper>
      <Background>
        <SampleImages images={sampleImages} onClick={openGallery} />
      </Background>
      <Header>
        <HomeDetails tags={tags} />
        <HomeOptions saved={saved} btnColor="#007882" openGallery={openGallery} handleSaveClick={handleSaveClick} />
      </Header>
      <Footer>
        <GallerySize size={images.length} openGallery={openGallery} />
      </Footer>
    </Wrapper>
  );
};

export default GalleryPreview;
