function findLongestWord(str){
  var arrayOfStrings = str.split(" ");  //Create an array of strings breaking up every space
  var longestStr = '';  //Temporary placeholder for longest strings
  for(var i=0; i<arrayOfStrings.length; i++){
    if(longestString.length < arrayOfStrings[i].length){
      longestString = arrayOfStrings[i];
    }
  }  //iterate through the array and compare longestString with current string
  str = longestString;
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); 
 
