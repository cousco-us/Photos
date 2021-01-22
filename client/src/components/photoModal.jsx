import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import HomeOptions from './galleryPreviewComponents/homeOptions.jsx';

const Wrapper = styled.div`
  display: flex;
  background-color: blue;
  border: 2px solid red;
  max-height: 87%;
  max-width: 92%;
  /* margin: 3%;
  border-radius: 8px;
  flex-direction: column;
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;*/
`;

const NavBar = styled.span`
  /* flex: 1; */
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #dfdfdf;
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

const Symbol = styled.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
`;

const CloseBtn = ({ color, handleClose }) => {
  const closeBtn = <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z" fill={color}></path></svg>;
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

const PhotoWrapper = styled.span`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const Photo = styled.img`

`;

const SideArrow = styled.span`
  flex: 1;
  display: block;
  margin: auto;
  height: 48px;
  width: 48px;
`;

const Footer = styled.span`
  /* flex: 1; */
  /* width: 100%; */
  display: flex;
  justify-content: flex-start;
  padding: 0 0 8px 8px;
`;

const Progress = styled.div`
  color: #ffffff;
  font-weight: 700;
  line-height: 24px;
  font-size: 16px;
`;

const modalRoot = document.getElementById('photo-modal-root');
const appRoot = document.getElementById('app');

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: '',
    };
    this.el = document.createElement('Wrapper');
  }

  componentDidMount() {
    modalRoot.setAttribute('style', 'position: fixed; top: 50%; left: 50%;transform: translate(-50%, -50%); width: 100%; height: 100%;');
    modalRoot.style['background-color'] = 'rgba(0, 0, 0, 0.85)';
    modalRoot.appendChild(this.el);
    debugger;
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    modalRoot.style['background-color'] = 'rgba(0, 0, 0, .6)';
    // modalRoot.setAttribute('style', "width: 0; height: 0;");
  }

  render() {
    const { home, saved, close, handleSaveClick } = this.props;
    const { details, images } = home;
    const { floorplan, price, address } = details;
    const { numBeds, numBaths } = floorplan;
    return ReactDOM.createPortal((
      <Wrapper>
        <div>stuff</div>
        <NavBar>
          <HomeDetails>
            {`${address.line1} | $${price} | ${numBeds} Beds ${numBaths} Baths`}
          </HomeDetails>
          <Right>
            <HomeOptions saved={saved} color="#3b4144" handleSaveClick={handleSaveClick}/>
            <CloseBtn color="#3b4144" handleClose={this.props.close} />
          </Right>
        </NavBar>
        <PhotoWrapper>
          <SideArrow />
          <Photo />
          <SideArrow />
        </PhotoWrapper>
        <Footer>
          <Progress total={21} current={2} />
        </Footer>
      </Wrapper>
    ), this.el);
  }
}

const PhotoModalWrapper = ({home, saved, showingPhotoModal, close, handleSaveClick}) => {
  if (showingPhotoModal) {
    return (
      <PhotoModal home={home} saved={saved} close={close} handleSaveClick={handleSaveClick} />
    );
  }
  return <div />;
};
export default PhotoModalWrapper;
