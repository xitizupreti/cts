Write a function in React that accepts an array of numbers, and then divide them into 10 percentiles i.e., Taking 0 as 0% and the largest number in the array as 100% return an array of 10 elements that indicate the number of elements that are at 0-10%, 10-20%, 20-30%, etc.

For Instance;
Say the array [ 13, 5, 67, 100, 82]
the max number is 100 so that's the 100th%
and the result should be [1, 1, 0, 0, 0, 0, 1, 0, 1, 1]
there is 1 element in 0-10% (5), 1 in 10-20% (13), none in 20-30%, and so forth.
