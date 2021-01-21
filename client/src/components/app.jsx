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
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHome: {},
      saved: false,
      showingGallery: false,
    };
    const { currentHome, saved } = this.state;
    this.setState = this.setState.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/photoGallery/60022e8d39ee0a8615c3f457')
      .then(({ data }) => {
        const currentHome = data[0];
        const { saved } = currentHome;
        this.setState((state) => ({
          currentHome,
          saved,
        }));
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

  closeGallery(event) {
    event.preventDefault();
    console.log('BLASSDA');
    this.setState((state) => ({
      showingGallery: false,
    }));
  }

  render() {
    const { currentHome, saved, showingGallery } = this.state;
    if (currentHome.images) {
      return (
        <AppWrapper onClick={this.closeGallery.bind(this)}>
          <GalleryPreview  saved={saved} currentHome={currentHome} handleSaveClick={this.handleSaveClick} showingGallery={showingGallery} />
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
