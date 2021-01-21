import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import HomeOptions from './galleryPreviewComponents/homeOptions.jsx';

const modalRoot = document.getElementById('modal-root');
const appRoot = document.getElementById('app');
const Modal = styled.div`
  z-index: 100;
  position: fixed;
  inset: 0;
`;
modalRoot.setAttribute('style', "position: fixed; top: 50%; left: 50%;transform: translate(-50%, -50%); width: 100%; height: 100%;");
appRoot.style.filter = 'blur(20px)';
modalRoot.style['background-color'] = 'rgba(0, 0, 0, 0.6)';

const Wrapper = styled.div`
  margin: 3%;
  display: flex;
  border-radius: 8px;
  background-color: white;
  flex-direction: column;
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;
  max-height: 87%;
  max-width: 92%;
  align-items: flex-start;
  padding: 8px;
`;

const NavBar = styled.span`
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #dfdfdf;
`;

const OptionButton = styled.button`
  flex: 1;
  height: 40px;
  padding: 0 1em;
  background: white;
  display: inline-block;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #dfdfdf;
  margin-right: 10px;
  font-weight: 700;
  line-height: 20px;
  font-size: 16px;
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: #007882;
`;
const DisplayChoice = styled.div`
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  object-fit: scale-down;
  overflow-y: scroll;
  border-radius: 9px;
`;
const ImageRow = styled.span`
  max-width: 100%;
  display: flex;
  padding: 0;
  justify-content: space-between;
`;

const Image = styled.img`
  max-height: 550px;
  max-width: ${(props) => (`${(100 / Number(props.num))}%`)};
  flex: 1;
  object-fit: cover;
  padding: ${(props) => ((props.last === 'mmhmm') ? '0 0 8px 0' : '0 8px 8px 0')};
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
            <OptionButton>
              Photos
            </OptionButton>
          </DisplayChoice>
          <HomeOptions saved={saved} color="#3b4144" />
        </NavBar>
        <HomeDetails>
          {`${address.line1} | $${price} | ${numBeds} Beds ${numBaths} Baths`}
        </HomeDetails>
        <Images>
          <ImageRow>
            <Image src={images[0]} num="1" alt="gallery-pic" last="mmhmm" />
          </ImageRow>
          <ImageRow>
            {images.slice(1, 4).map((image, i, arr) => (
              <Image src={image} num="3" alt="gallery-pic" last={((i === arr.length - 1) ? 'mmhmm' : undefined)} />
            ))}
          </ImageRow>
          <ImageRow>
            {images.slice(5, 7).map((image, i, arr) => (
              <Image src={image} num="2" alt="gallery-pic" last={((i === arr.length - 1) ? 'mmhmm' : undefined)} />
            ))}
          </ImageRow>
        </Images>
      </Wrapper>
    ),
    modalRoot,
  );
});

export default GalleryModal;
