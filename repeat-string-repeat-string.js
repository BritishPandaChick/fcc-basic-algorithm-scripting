function repeatStringNumTimes(str, num){
  var holderArray= [];  //create an empty array to store the strings
  for (var i=0; i < num; i++){
    holderArray.push(str);
  }  //Add strings based on how times requested
  str = holderArray.join("");}//Turn array of strings into a single string
  return str;
}

repeatStringNumTimes("abc", 3);
