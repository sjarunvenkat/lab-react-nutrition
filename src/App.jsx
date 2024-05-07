import React, { useState } from "react";
import FoodBox from "./resources/FoodBox";
import Search from "./resources/SearchBar";
import FoodData from "./resources/FoodData";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFoods, setFilteredFoods] = useState(FoodData);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = FoodData.filter((food) =>
      food.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  return (
    <div className="container">
      <Search onSearch={handleSearch} />
      {filteredFoods.map((food, index) => (
        <FoodBox key={index} food={food} searchTerm={searchTerm} />
      ))}
    </div>
  );
};

export default App;
