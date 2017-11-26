function rot13(encodedStr) { //LBH QVQ VG!
  var codeArr = encodedStr.split(""); //String to Array
  var decodedArr = []; //Your Result goes here

  //Create alphabet character arary that goes past Z by 13 letters starting with A
  var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
  "P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H",
  "I","J","K","L","M"];  //Iterate through inputted string Array

  for (var i=0; i < codeArr.length; i++){
    //If current value isn't in alphabet
  if(alphabet.indexOf(codeArr[i])===-1){
    decodeArr.push(codeArr[i]);
  } else {
    //iterate through alphabet
    for(var j=0; j < alphabet.length; j++){
      //if current value in array is equal to alphabet
      if(codeArr[i]===alphabet[j]){
        //Add value to decodedArr + 13 index shifts in alphabet
        decodedArr.push(alphabet[j+13]);
      }
    }
  }
}

return decodedArr.join(""); //Array to String
}
 
rot13("SERR PBOR PNZC");
