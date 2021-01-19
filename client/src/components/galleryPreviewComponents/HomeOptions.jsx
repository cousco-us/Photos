import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  border: 1px solid black;
  flex: 1;
  /* justify-content: flex-end; */
`;

const HomeDetails = ({ saved }) => {
  let hasBeenSavedClass = 'not-saved';
  if (saved) {
    hasBeenSavedClass = 'saved';
  }
  return (
    <Wrapper>
      <button type="submit" className="save-btn">
        <div className={hasBeenSavedClass}>
          {/* heart symbol */}
          {'<3'}
        </div>
        Save
      </button>
      <button type="submit" className="share-btn">
        {/* share symbol */}
        [|] Share
      </button>
    </Wrapper>
  );
};

export default HomeDetails;
