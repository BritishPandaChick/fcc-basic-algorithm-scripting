function mutation(arr){
  var word1 = arr[0].toLowerCase();
  var word2 = arr[1].toLowerCase();
  for (var i=0; i < word2.length; i++){
    if they are in word1 */
    var value = word1.indexOf(word2[i]);
    //value holder for character
    if(value===-1){
      return false;
      //-1 is the result meaning it is not contained in words
    }
  }
  return true;


