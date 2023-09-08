import React, { useState } from "react";

const T1 = () => {
  const [inputArray, setInputArray] = useState([]);
  const [percentiles, setPercentiles] = useState(new Array(10).fill(0));

  const handleInput = (e) => {
    const inputArray = e.target.value
      .split(",")
      .map((str) => parseInt(str.trim(), 10));

    setInputArray(inputArray);
    calculatePercentiles(inputArray);
  };

  const calculatePercentiles = (array) => {
    if (array.length === 0) {
      setPercentiles(new Array(10).fill(0));
      return;
    }

    const maxNum = Math.max(...array);
    const newPercentiles = new Array(10).fill(0);

    array.forEach((num) => {
      const percentile = Math.floor((num / maxNum) * 10);
      newPercentiles[percentile] += 1;
    });

    setPercentiles(newPercentiles);
  };

  return (
    <>
      <div>
        <div>
          <label>Enter numbers separated by commas:</label>
          <input type="text" onChange={handleInput}></input>
        </div>
        <div>
          <ul>
            {percentiles.map((count, index) => (
              <li key={index}>
                {index * 10}% - {(index + 1) * 10}%: {count}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default T1;
