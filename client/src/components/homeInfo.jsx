/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-height: 460px;
  max-width: 952px;
  width: 50%;
  margin-left: 16%;
  padding: 10px;
  display: flex;
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;

`;

const LeftBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 10%;
`;
const RightBox = styled.div`
  flex: 1;
`;
const Address = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Floorplan = styled.span`
  flex: 1;
  display: flex;
  color: #3b4144;
  letter-spacing: -0.1px;
  line-height: 24px;
  padding-top: 20px;
  justify-content: space-between;
  padding-right: 10%;
`;
const LineOne = styled.span`
  flex: 1;
  color:#3b4144;
  display: inline;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.1px;
  line-height: 32px;
`;
const LineTwo = styled.span`
  flex: 1;
  color: #3b4144;
  display: inline;
  letter-spacing: -0.1px;
  line-height: 24px;
`;

//refactor to have symbol defined externally
const Symbol = styled.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
`;

const Bed = () => {
  const bed = <svg class="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099"></path></svg>;
  return (
    <Symbol>
      {bed}
    </Symbol>
  );
};
const Bath = () => {
  const bath = <svg class="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099"></path></svg>;
  return (
    <Symbol>
      {bath}
    </Symbol>
  );
};
const Triangle = () => {
  const triangle = <svg class="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099"></path></svg>;
  return (
    <Symbol>
      {triangle}
    </Symbol>
  );
};

const HomeInfo = ({ home }) => {
  const { details } = home;
  const { floorplan, price, address } = details;
  const { numBeds, numBaths, sqft } = floorplan;
  const currentDate = new Date();
  return (
    <Wrapper>
      <LeftBox>
        <Address>
          <LineOne>
            {address.line1}
          </LineOne>
          <LineTwo>
            {address.line2}
          </LineTwo>
        </Address>
        <Floorplan>
          <Bed /> {numBeds} Beds
          <Bath /> {numBaths} Baths
          <Triangle /> {sqft} sqft
          {/* add comma to sqft if possible */}
        </Floorplan>
      </LeftBox>
      <RightBox>
        <div className="price right">
          <LineOne>
            {/* add commas to price if possible */}
            ${price}
          </LineOne>
          {/* <p className="price-info">
            Trulia Estimate (i) */}
            {/* make this a button which on click will open a model with info
            also replace (i) with little info logo */}
          {/* </p>
          <p className="price-as-of">
            as of {currentDate.toDateString()}
          </p> */}
        </div>
      </RightBox>
    </Wrapper>
  );
};

export default HomeInfo;

