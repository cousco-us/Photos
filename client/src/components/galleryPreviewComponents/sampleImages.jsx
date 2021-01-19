import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
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
  padding-left: 10px;
  /* flex-direction: column; */
`;
const TopImage = styled.div`
  padding-bottom: 5px;
`;
const BottomImage = styled.div`
`;
const SampleImages = ({ images }) => (
  <Wrapper>
    <LeftImage>
      <img className="sample-image-big" src={images[0]} alt="main images of preview" height="430" width="700" />
    </LeftImage>
    <RightImages>
      <TopImage>
        <img className="sample-image-top" src={images[1]} alt="main images of preview" height="210" width="250" />
      </TopImage>
      <BottomImage>
        <img className="sample-image-bottom" src={images[2]} alt="main images of preview" height="210" width="250" />
      </BottomImage>
    </RightImages>
  </Wrapper>
);

export default SampleImages;
