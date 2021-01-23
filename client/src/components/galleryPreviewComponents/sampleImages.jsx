import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.5s ease;
  &:hover {
    transform: ${(props) => (props.zoomed ? 'scale(1.05)' : 'none')};
  };
`;

const LeftImage = styled.div`
  order: 1;
  flex: 1;
`;

const RightImages = styled.div`
  display: flex;
  flex-direction: column;
  order: 2;
  flex: 1;
  padding-left: 11px;
`;
const TopImage = styled.div`
  padding-bottom: 6px;
`;
const BottomImage = styled.div`
`;
const SampleImages = ({ images, handleGalleryDisplay, zoomed }) => (
  <Wrapper onClick={handleGalleryDisplay} zoomed={zoomed}>
    <LeftImage>
      <img className="sample-image-big" src={images[0]} alt="main images of preview" height="460" width="700" />
    </LeftImage>
    <RightImages>
      <TopImage>
        <img className="sample-image-top" src={images[1]} alt="main images of preview" height="225" width="251" />
      </TopImage>
      <BottomImage>
        <img className="sample-image-bottom" src={images[2]} alt="main images of preview" height="225" width="251" />
      </BottomImage>
    </RightImages>
  </Wrapper>
);

export default SampleImages;
