import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import HomeOptions from './galleryPreviewComponents/homeOptions.jsx';
import PhotoModalWrapper from './photoModal.jsx';

// const modalRoot = document.getElementById('modal-root');
// const Modal = styled.div`
//   z-index: 100;
//   position: fixed;
//   inset: 0;
// `;

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

const Symbol = styled.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
  transition: all 0.3s ease;

`;

const SymbolSvg = styled.svg`
  fill: ${(props) => (props.color)};
  &:hover {
    fill: #007882;
  }
`;

const CloseBtn = ({ color, handleClose }) => {
  const closeBtn = <SymbolSvg className="svg" color={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z"></path></SymbolSvg>;
  return (
    <Symbol onClick={handleClose}>
      {closeBtn}
    </Symbol>
  );
};

const Right = styled.span`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: .7em;
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
  width: 100%;
  display: flex;
  padding: 0;
  max-height: 550px;
  justify-content: space-between;
`;

const Image = styled.img`
  max-width: ${(props) => (`${(100 / Number(props.num))}%`)};
  flex: 1;
  object-fit: cover;
  padding: ${(props) => ((props.num === 1) ? '0 0 8px 0' : '0 8px 8px 0')};
`;

let makeGalleryImageArray = (images) => {
  let counter = 0;
  let prevSize;
  let subArrays = [];
  while (counter <= images.length) {
    let subArrSize = (Math.floor(Math.random() * 3 + 1));
    while (subArrSize === prevSize) {
      subArrSize = Math.floor(Math.random() * 3 + 1);
    }
    prevSize = subArrSize;
    subArrays.push(images.slice(counter, counter + subArrSize));
    counter = counter + subArrSize;
  }
  return subArrays;
};

const modalRoot = document.getElementById('gallery-modal-root');
const appRoot = document.getElementById('app');

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: makeGalleryImageArray(this.props.home.images),
      showingPhotoModal: false,
      clickedImageIndex: 0,
    };
    this.el = document.createElement('Wrapper');
    // this.el.setAttribute('style', 'overflow: scroll');
    this.handlePhotoModalDisplay = this.handlePhotoModalDisplay.bind(this);
  }

  componentDidMount() {
    modalRoot.setAttribute('style', 'position: fixed; top: 50%; left: 50%;transform: translate(-50%, -50%); width: 100%; height: 100%;');
    modalRoot.style['background-color'] = 'rgba(0, 0, 0, 0.6)';
    appRoot.style.filter = 'blur(20px)';
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    modalRoot.style['background-color'] = 'rgba(0, 0, 0, 0)';
    appRoot.style.filter = 'none';
    modalRoot.setAttribute('style', "width: 0; height: 0;");
  }

  handlePhotoModalDisplay(event) {
    event.preventDefault();
    const show = !this.state.showingPhotoModal;
    const index = Number(event.target.alt);
    if (index !== undefined) {
      this.setState((state) => ({
        showingPhotoModal: show,
        clickedImageIndex: index,
      }));
    } else {
      this.setState((state) => ({
        showingPhotoModal: show,
      }));
    }
  }

  render() {
    const { images, clickedImageIndex } = this.state;
    const { home, saved, close, handleSaveClick, showingPhotoModal } = this.props;
    const { details } = home;
    const { floorplan, price, address } = details;
    const { numBeds, numBaths } = floorplan;
    let counter = -1;
    return ReactDOM.createPortal(
      (
        <Wrapper>
          <NavBar>
            <DisplayChoice>
              <OptionButton>
                Photos
              </OptionButton>
            </DisplayChoice>
            <Right>
              <HomeOptions saved={saved} color="#3b4144" handleSaveClick={handleSaveClick} />
              <CloseBtn color="#3b4144" handleClose={this.props.close} />
            </Right>
          </NavBar>
          <HomeDetails>
            {`${address.line1} | ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 7 }).format(price)} | ${numBeds} Beds ${numBaths} Baths`}
          </HomeDetails>
          <Images>
            {
              images.map((imageArr, i) => (
                <ImageRow>
                  {
                    imageArr.map((image, j, arr) => {
                      counter += 1;
                      return (<Image src={image} num={arr.length} alt={counter} onClick={this.handlePhotoModalDisplay} />);
                    })
                  }
                </ImageRow>
              ))
            }
          </Images>
          <PhotoModalWrapper home={home} saved={this.props.saved} showingPhotoModal={this.state.showingPhotoModal} close={this.handlePhotoModalDisplay} handleSaveClick={this.props.handleSaveClick} index={clickedImageIndex}/>
        </Wrapper>
      ),
      this.el,
    );
  }
}

const GalleryWrapper = ({home, saved, showingGallery, closeGalleryModal, handleSaveClick }) => {
  if (showingGallery) {
    return (
      <GalleryModal home={home} saved={saved} close={closeGalleryModal} handleSaveClick={handleSaveClick} />
    );
  }
  return <div />;
};
export default GalleryWrapper;
