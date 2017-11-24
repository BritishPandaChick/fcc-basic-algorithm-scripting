function confirmEnding(str, target){
  var start = str.length-(target.length);  //variable for just comparing end of string;
  if(str.substr(start, str.length)==target){    //compare end of string with the target string
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
