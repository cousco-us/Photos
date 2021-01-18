import React from 'react';

const HomeDetails = ({ tags }) => (
  <div>
    <h1>HomeDetails</h1>
    <span>
      {tags[0].toUpperCase()}
    </span>
  </div>
);

export default HomeDetails;
