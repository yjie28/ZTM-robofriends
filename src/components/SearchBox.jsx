import React from 'react';

// will work without searchfield..
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder={searchfield}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;