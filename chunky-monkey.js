function chunkArrayInGroups(arr, size){
  var holderArray=[];
  var count=0;
  while(count < arr.length){
    holderArray.push(arr.slice(count, count + size));
    //add to holderArray values between current index and size
    count = count + size;
    //increase count
  }
  return holderArray;



chunkyArrayInGroups(["a", "b", "c", "d"], 2);