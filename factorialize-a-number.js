function factorialize(num) {
  var count = num;  //store a count variable for for loop
  if (count === 0){
    return 1;    //Statement for unique '0' case scenario
  } else {
    for (var i=1; i < count; i++){
      num = num * i;    //loop to factorialize starting at 1 and moving up to the end
    }
  }
    return num;
} 

factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);
