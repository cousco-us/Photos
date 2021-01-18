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
    this.setState = this.setState.bind(this);
  }

  render() {
    return (
      <div>
        <h1>This is my Component</h1>
      </div>
    );
  }
}

export default App;
