function repeatStringNumTimes(str, num){
  var holderArray= [];
  for (var i=0; i < num; i++){
    holderArray.push(str);
  }
  str = holderArray.join("");
  
}

repeatStringNumTimes("abc", 3);