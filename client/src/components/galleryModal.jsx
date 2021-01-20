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
const Images = styled.div`
  flex: 10;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
const ImageRow = styled.span`
  //we will pass in number of images
  padding: 0;
  justify-content: space-between;
`;

// const Image = styled.span`

// `;

const GalleryModal = (({ home, saved }) => {
  let placeholder = 1;
  const { details } = home;
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
          IMAGES
          <ImageRow>
            FIRST ROW
          </ImageRow>
          <ImageRow>
            Second ROW
          </ImageRow>
          <ImageRow>
            Third ROW
          </ImageRow>
        </Images>
      </Wrapper>
    ),
    modalRoot,
  );
});

export default GalleryModal;
