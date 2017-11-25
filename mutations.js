function mutation(arr){
  var word1 = arr[0].toLowerCase();
  var word2 = arr[1].toLowerCase();  //Lower case both string inputs for comparison purposes
  for (var i=0; i < word2.length; i++){    /* Length of 2nd word is important because iterating through its letters to see
    if they are in word1 */
    var value = word1.indexOf(word2[i]);
    //value holder for character
    if(value===-1){
      return false;
      //-1 is the result meaning it is not contained in words
    }
  }
  return true;
}

mutation(["hello", "hey"]);
