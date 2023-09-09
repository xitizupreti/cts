import React, { useState } from "react";

const T1 = () => {
  const [inputArray, setInputArray] = useState([]);
  const [percentiles, setPercentiles] = useState(new Array(10).fill(0));
// console.log(percentiles);
  const handleInput = (e) => {
    const inputArray = e.target.value
      .split(",")
      .map((str) => parseInt(str.trim(), 10));
// console.log(inputArray);
    setInputArray(inputArray);
    calculatePercentiles(inputArray);
  };

  const calculatePercentiles = (array) => {

    const maxNum = Math.max(...array);
    const newPercentiles = new Array(10).fill(0);

    array.forEach((num) => {
      let percentile = Math.floor((num / maxNum) * 10);
      console.log(percentile);
      if (percentile===10){
        percentile=9;
      }
      console.log(percentile);
      newPercentiles[percentile]++;
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
              // console.log(count);
              // console.log(index);
              <li key={index}>
                {index * 10}% - {(index + 1) * 10}%: {count}
              </li>
))}
          </ul>
        </div>
      </div>
      <hr/><hr/>
    </>
  );
};

export default T1;
