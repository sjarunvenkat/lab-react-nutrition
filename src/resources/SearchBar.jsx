import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="field">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="What's your food today?"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
