import React, { useState } from "react";

const FoodBox = ({ food }) => {
  const [count, setCount] = useState(1);
  const [totalCalories, setTotalCalories] = useState(food.calories);

  const handleIncrement = () => {
    setCount(count + 1);
    setTotalCalories(totalCalories + food.calories);
  };

  const handleReset = () => {
    setCount(1);
    setTotalCalories(food.calories);
    onReset(food.id);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.img} alt={food.name} width={"64px"} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={count} readOnly />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleIncrement}>
                +
              </button>
            </div>
          </div>
          <p>{`${count} ${food.name} = ${totalCalories} calories`}</p>
          <div className="control">
            <button className="button reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
