function palindromes(str){
  str=str.toLowerCase();
  //Change string to lowercase so no case sensitive issues
  for(var i=0; i < str.length; i++){
    str=str.replace(' ', '');
    str=str.replace(',', '');
    str=str.replace('.','');
    str=str.replace('/','');
    str=str.replace('_','');
    str=str.replace('-','');
    str=str.replace('(','');
    str=str.replace(')','');
    }
    //loop to replace special characters without using regular expressions
    var copy = str.split('').reverse().join('');  //create copy of string and reverse it
    if(copy===str){
      return true;
    }
    return false;
  }

palindromes("0_0 (: /-\ :) 0-0"); 
 
