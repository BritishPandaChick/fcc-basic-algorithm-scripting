function titleCase(str){
  var strArr = str.toLowerCase().split(" ");
  var newArr = [],
  newStr = "";
  while(strArr.length > 0){
    newArr.push(capitializeFirst(strArr.pop()));
  }
  newStr = newArr.reverse().join(" ");
  return newStr;
}

function capitializeFirst(str){
  var firstCap = "",
  restWord = "";
  firstCap = str.charAt(0).toUpperCase();
  restWord = str.substring(1);
  return firstCap + restWord;
}

titleCase("I'm a little tea pot");
