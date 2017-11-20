function reverseString(str){
  str = str.split("");  //Split the string into an array of characters for each space of ''
  str = str.reverse();  //Use array function reverse to reverse the vaules of index from first to last and vice versa
  str = str.join([separator = '']);  //reset to a string using array's joint function and adding the separator ''
  return str;
}

reverseString("hello");
reverseString("Greetings from Earth");
