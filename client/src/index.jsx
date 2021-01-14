import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  console.log('made it in!');
  return (
    <div>We in!</div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
