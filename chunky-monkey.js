function chunkArrayInGroups(arr, size){
  var holderArray=[];  //Empty array we will add values to
  var count=0;  //while loop counter and increment index
  while(count < arr.length){
    holderArray.push(arr.slice(count, count + size));
    //add to holderArray values between current index and size
    count = count + size;
    //increase count
  }
  return holderArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkyArrayInGroups(["a", "b", "c", "d"], 2);
