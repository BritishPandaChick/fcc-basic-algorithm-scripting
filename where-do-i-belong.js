function getIndexToIns(arr, num) {
  var count = 0;
  for (var i=0; i < arr.length; i++){
    if(arr[i]-num < 0){
      //if arr value - number returns negative it is small number
      count = count + 1;
    }
  }

  return count;
}

getIndexToIns([40, 60], 50);