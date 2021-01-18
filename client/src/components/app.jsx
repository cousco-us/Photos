import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GalleryPreview from './galleryPreview.jsx';
import HomeInfo from './homeInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHome: {},
      saved: false,
    };
    const { currentHome, saved } = this.state;
    this.setState = this.setState.bind(this);
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

  openGallery() {
    console.log('You tried to open the gallery!');
  }

  render() {
    const { currentHome, saved } = this.state;
    if (currentHome.images) {
      return (
        <div className="content">
          <GalleryPreview images={currentHome.images} saved={saved} tags={currentHome.tags} openGallery={this.openGallery} />
          <HomeInfo home={currentHome} />
        </div>
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
