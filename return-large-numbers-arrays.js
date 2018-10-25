function largestOfFlour(arr){
  var largestArray = [];  //Create an empty array to fill later
  for (var i=0; i < arr.length; i++){
    var largestNumber = 0;    //Placeholder to find largest number
    for (var j=0; j < arr.length; j++){
      if(largestNumber < arr[i][j]){
        largestNumber = arr[i][j];
      }
    }
    largestArray.push(largestNumber);    //Add largest number to new array
  }
  return largestArray;
}

largestOfFour([[4,5,1,3], [13,27,18,26], [32,35,37,39],[1000,1001,857,1]]);
