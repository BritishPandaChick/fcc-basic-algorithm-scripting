function destroyer(arr){  //Remove all the values
  var args = Array.prototype.slice.call(arguments);  //get full array values
  args.splice(0,1);  //remove original array
  var placeHolder = [];
  for (var i=0; i < arr.length; i++){
    for (var j=0; j < args.length; j++){
      if(arr[i]==args[j]){
        delete arr[i];        //Compare array with values and delete any matches
      }
    }
  }

  placeHolder = arr.filter(removeFalseVar);  //Filter out 'falsy' values
  return placeHolder;}function removeFalseVar(value){
    return Boolean(value);
  } 

  destroyer([1,2,3,1,2,3], 2, 3);
 
