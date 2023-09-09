## Q1

Write a function in React that accepts an array of numbers, and then divide them into 10 percentiles i.e., Taking 0 as 0% and the largest number in the array as 100% return an array of 10 elements that indicate the number of elements that are at 0-10%, 10-20%, 20-30%, etc.

# For Instance;

Say the array [ 13, 5, 67, 100, 82] the max number is 100 so that's the 100th% and the result should be [1, 1, 0, 0, 0, 0, 1, 0, 1, 1] there is 1 element in 0-10% (5), 1 in 10-20% (13), none in 20-30%, and so forth.

## Q2

Write a program that prints 1 2 3 4 5 6 7 ... up to some +ve integer N the natural number series, but with all numbers that also show up in the Fibonacci series replaced with -1.

# Here is a refresher on Fibonacci if you need it:

The Fibonacci series starts with the numbers 0 and 1 and then you can generate all subsequent numbers by summing the previous 2 numbers in the series so the series goes 0 1 1 2 3 5 8 13 21... etc
So, in your program it should print the natural number series, but any number that also occurs in the Fibonacci series needs to be replaced with -1 the output should look like -1 -1 -1 4 -1 6 7 -1 9 10 ... etc
