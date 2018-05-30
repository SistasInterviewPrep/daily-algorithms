function AnagramIndex(A,B){
  var p = [];
  
  for (var i = 0; i < A.length; i++){
    
     var matching_index = B.indexOf(A[i]);
     p.push(matching_index);
     //console.log("matching index for " + A[i] + " in B is " + matching_index);
     B.splice(matching_index, 1, 'visited');  
  }
  return console.log(p);  
}



AnagramIndex([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]);

