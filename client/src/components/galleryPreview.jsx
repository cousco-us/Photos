/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import SampleImages from './galleryPreviewComponents/sampleImages.jsx';
import HomeDetails from './galleryPreviewComponents/homeDetails.jsx';
import HomeOptions from './galleryPreviewComponents/homeOptions.jsx';
import GallerySize from './galleryPreviewComponents/gallerySize.jsx';
import GalleryWrapper from './galleryModal.jsx';
import PhotoModalWrapper from './photoModal.jsx';

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

class GalleryPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHome: this.props.currentHome,
      showingGallery: false,
      imagesZoomed: false,
      // showingPhotoModal: true,
    };
    this.setState = this.setState.bind(this);
    this.handleGalleryDisplay = this.handleGalleryDisplay.bind(this);
    // this.handlePhotoModalDisplay = this.handlePhotoModalDisplay.bind(this);
  }

  handleGalleryDisplay(event) {
    event.preventDefault();
    const show = !this.state.showingGallery;
    this.setState({
      showingGallery: show,
    });
  }

  handleHoverZoom(event) {
    event.preventDefault();
    const zoom = !this.state.imagesZoomed;
    this.setState({
      imagesZoomed: zoom,
    });
  }

  // choose sampleImages more deliberately (might be a stretch goal)
  render() {
    const { currentHome, showingGallery, imagesZoomed } = this.state;
    const { images, tags } = currentHome;
    const sampleImages = images.slice(0, 3);
    return (
      <Wrapper onMouseEnter={this.handleHoverZoom.bind(this)} onMouseLeave={this.handleHoverZoom.bind(this)}>
        <Background>
          <SampleImages images={sampleImages} handleGalleryDisplay={this.handleGalleryDisplay} zoomed={imagesZoomed}/>
        </Background>
        <Header>
          <HomeDetails tags={tags} />
          <HomeOptions saved={this.props.saved} btnColor="#007882" handleSaveClick={this.props.handleSaveClick} />
        </Header>
        <Footer>
          <GallerySize size={images.length} handleGalleryDisplay={this.handleGalleryDisplay} />
        </Footer>
        <GalleryWrapper home={currentHome} saved={this.props.saved} showingGallery={showingGallery} closeGalleryModal={this.handleGalleryDisplay} handleSaveClick={this.props.handleSaveClick}/>
      </Wrapper>
    );
  }
}

export default GalleryPreview;
