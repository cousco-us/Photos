import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.span`
  text-align: right;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  flex-basis: 25%;
`;

const OptionButton = styled.button`
  flex: 1;
  height: 40px;
  display: inline-block;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #869099;
  margin-right: 10px;
  font-weight: 700;
  line-height: 24px;
  font-size: 16px;
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: #3b4144;
`;
const Symbol = styled.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
`;
const Heart = ({ saved }) => {
  const filled = <svg class="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.912-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#ff5e3f"></path></svg>;
  const unfilled = <svg class="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#007882"></path></svg>;
  const heart = saved ? filled : unfilled;
  return (
    <Symbol>
      {heart}
    </Symbol>
  );
};

const Share = () => {
  const share = <svg class="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z" fill="#007882"></path></svg>;
  return (
    <Symbol>
      {share}
    </Symbol>
  );
}

const HomeOptions = ({ saved }) => {
  let hasBeenSavedClass = 'not-saved';
  if (saved) {
    hasBeenSavedClass = 'saved';
  }
  return (
    <Wrapper>
      <OptionButton type="submit" className="save-btn">
        <Heart saved={saved} /> Save
      </OptionButton>
      <OptionButton type="submit" className="share-btn">
        <Share /> Share
      </OptionButton>
    </Wrapper>
  );
};

export default HomeOptions;
