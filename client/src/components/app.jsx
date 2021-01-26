import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import GalleryPreview from './galleryPreview.jsx';
import GalleryModal from './galleryModal.jsx';
import HomeInfo from './homeInfo.jsx';

const AppWrapper = styled.div`
  display: block;
  max-width: 952px;
  margin: auto;
  flex-direction: column;
  overflow: hidden;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHome: {},
      saved: false,
      // showingGallery: false,
      // showingPhotoModal: false,
    };
    const { currentHome, saved } = this.state;
    this.setState = this.setState.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3002/api/photoGallery')
      .then(({ data }) => {
        const currentHome = data[Math.floor(Math.random() * data.length)];
        const { saved } = currentHome;
        this.setState(({ currentHome, saved }));
      })
      .catch((err) => {
        console.log('Error getting currentHome on mount: ', err);
      });
  }

  handleSaveClick(event) {
    event.preventDefault();
    const isSaved = !this.state.saved;
    this.setState((state) => ({
      saved: isSaved,
    }));
  }

  render() {
    const { currentHome, saved, showingGallery, showingPhotoModal } = this.state;
    if (currentHome.images) {
      return (
        <AppWrapper>
          <GalleryPreview  saved={saved} currentHome={currentHome} handleSaveClick={this.handleSaveClick} />
          <HomeInfo home={currentHome} />
        </AppWrapper>
      );
    }
    return (
      <h1>
        Loading...
      </h1>
    );
  }
}

export default App;
