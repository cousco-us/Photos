/* eslint-disable react/prop-types */
import React from 'react';

const HomeInfo = ({ home }) => {
  const { details } = home;
  const { floorplan, price, address } = details;
  const { numBeds, numBaths, sqft } = floorplan;
  const currentDate = new Date();
  return (
    <div className="home-info">
      <div className="address left">
        <h4>
          {address.line1}
        </h4>
        <p>
          {address.line2}
        </p>
      </div>
      <span className="floorplan left">
        <div className="num-beds">
          <div className="bed-logo">
            little Bed Logo Here
          </div>
          <div>
            {numBeds} Beds
          </div>
        </div>
        <div className="num-baths">
          <div className="baths-logo">
            little Bath Logo Here
          </div>
          <div>
            {numBaths} Baths
          </div>
        </div>
        <div className="sqft">
          <div className="sqft-logo">
            little Triangle Logo Here
          </div>
          <div>
            {sqft} sqft
            {/* add comma to sqft if possible */}
          </div>
        </div>
      </span>
      <div className="price right">
        <h4 className="price-value">
          ${price}
          {/* add commas to price if possible */}
        </h4>
        <p className="price-info">
          Trulia Estimate (i)
          {/* make this a button which on click will open a model with info
          also replace (i) with little info logo */}
        </p>
        <p className="price-as-of">
          as of {currentDate.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default HomeInfo;

