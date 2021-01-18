/* eslint-disable react/prop-types */
import React from 'react';

const HomeInfo = ({ home }) => {
  const {
    tags,
    details,
    saved,
  } = home;
  return (
    <div>
      <div>
        Price: $
        {details.price}
      </div>
      <div>
        tags:
        {tags}
      </div>
      <div>
        HasBeenSaved: {JSON.stringify(saved)}
      </div>
      <div>
        sqft: {details.floorplan.sqft}
      </div>
    </div>
  );
};

export default HomeInfo;
