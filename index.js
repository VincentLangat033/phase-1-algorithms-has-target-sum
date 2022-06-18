function hasTargetSum(array, target) {
    // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const resultingNmber = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === resultingNmber)
       return true;
    }
  }

  return false;
}




/* 
  Write the Big O time complexity of your function here
   function hasTargetSum(array, target)
   Use a for loop
   for(let i = 0, i<array.length, i ++ ){
     resultingNumber = target - array[i]
    //  now lets iterate over J
    for (j=i+1, j<array.length, j ++){
    if (array[j] === resultingNmber)
    return true;
    }
    return false;

   }
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  create an object to keep track of numbers we've already seen
  iterate through each number in the array
    for the current number , we  identify a complement(resultingNumber) that adds to 10 
    check if any key on our object is the complement(resultingNumber )
      if so, return true
      otherwise, add that number to the object
  if I reach the end of the array, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
