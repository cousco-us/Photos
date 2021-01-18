import React from 'react';

const HomeDetails = ({ saved }) => {
  let hasBeenSavedClass = 'not-saved';
  if (saved) {
    hasBeenSavedClass = 'saved';
  }
  return (
    <div>
      <h1>HomeDetails</h1>
      <span>
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
      </span>
    </div>
  );
};

export default HomeDetails;
