function bouncer(arr){  //Don't show a false ID to this bouncer.
var holderArray=[];
holderArray = arr.filter(removeFalseVar);  //calls filter to run removeFalseVar method
return holderArray;}
function removeFalseVar(value){
  return Boolean(value);  //Returns values for all non "falsy variables"
}

bouncer([7, "ate", "", false, 9]);
