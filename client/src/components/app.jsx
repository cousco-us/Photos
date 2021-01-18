import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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

  render() {
    const { currentHome } = this.state;
    if (currentHome.images) {
      return (
        <div>
          <img src={this.state.currentHome.images[0]} alt="pic0" width="500" height="600" />
        </div>
      );
    }
    return (
      <h1>
        Loading
      </h1>
    );
  }
}

export default App;
