import React from "react";

function isFibonacci(n) {
  let a = 0;
  let b = 1;
  while (b < n) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b === n;
}

const T2 = (props) => {
  const { N } = props;

  const generateSeries = () => {
    const series = [];
    for (let i = 1; i <= N; i++) {
      if (isFibonacci(i)) {
        series.push(-1);
      } else {
        series.push(i);
      }
    }
    return series;
  };

  const series = generateSeries();
  return (
    <>
      <div>
        {series.map((number, index) => (
          <span key={index}>{number} </span>
        ))}
      </div>
    </>
  );
};

export default T2;
