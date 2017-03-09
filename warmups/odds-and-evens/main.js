//Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array).
//for each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.
var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,22,26,28,55,56,53,67,52];     
var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.
//code herevense
function oddsAndEvens (nums){
    for(var i = 0; i < nums.length; i++)
    if (nums[i] % 2 === 0){
        evens.push(nums[i]);
    }
    else{
        odds.push(nums[i]);
    }
        
}

oddsAndEvens(nums);
  