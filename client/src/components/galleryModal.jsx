import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import HomeOptions from './galleryPreviewComponents/homeOptions.jsx';

const modalRoot = document.getElementById('modal-root');
const Modal = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
modalRoot.setAttribute('style', "position: fixed; top: 50%; left: 50%;transform: translate(-50%, -50%); width: 100%; height: 100%;");

const Wrapper = styled.div`
  margin: 5%;
  display: flex;
  border: 1px solid black;
  background-color: teal;
  flex-direction: column;
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;
  max-height: 85%;
  max-width: 85%;
  align-items: flex-start;
`;

const NavBar = styled.span`
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 8px;
`;

const DisplayChoice = styled.div`
  //we will pass in number of images
  margin-right: 10px;
  display: flex;
  justify-content: flex-start;
`;

const HomeDetails = styled.span`
  flex: 1;
  display: flex;
  width: 100%;
  padding: 8px;
  color: #3b4144;
  display: inline;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.1px;
  line-height: 20.02px;
`;
const Images = styled.span`
  flex: 1;
  width: 90%;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  object-fit: scale-down;
  overflow-y: scroll;
`;
const ImageRow = styled.span`
  padding: 0;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
`;
const OneImageRow = styled.span`
  //we will pass in number of images
  /* width: fit-content; */
  padding: 0;
  display: flex;
  justify-content: space-between;
`;
const getWidth = (numImages) => {
  99
};
const Image = styled.img`
  max-width: ${(props) => (`${(99 / Number(props.num))}%`)};
  flex: 1;
  border: 2px solid blue;
`;

const GalleryModal = (({ home, saved }) => {
  let placeholder = 1;
  const { details, images } = home;
  const { floorplan, price, address } = details;
  const { numBeds, numBaths } = floorplan;
  return ReactDOM.createPortal(
    (
      <Wrapper>
        <NavBar>
          <DisplayChoice>
            PHOTOS
          </DisplayChoice>
          <HomeOptions saved={saved} />
        </NavBar>
        <HomeDetails>
          {`${address.line1} | $${price} | ${numBeds} Beds ${numBaths} Baths`}
        </HomeDetails>
        <Images>
          <ImageRow>
            <Image src={images[0]} num="1" alt="gallery-pic" />
          </ImageRow>
          <ImageRow>
            {images.slice(1, 4).map((image) => (
              <Image src={image} num="3" alt="gallery-pic" />
            ))}
          </ImageRow>
          <ImageRow>
            {images.slice(5, 7).map((image) => (
              <Image src={image} num="2" alt="gallery-pic" />
            ))}
          </ImageRow>
        </Images>
      </Wrapper>
    ),
    modalRoot,
  );
});

export default GalleryModal;
