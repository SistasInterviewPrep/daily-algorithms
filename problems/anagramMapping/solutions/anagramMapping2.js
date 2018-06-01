//Super basic solve using nested for loops
//I would love some feed back on what the big O runtime of this would be
// the outer loop will always run a set amount of times, but the inner loop will vary


//Solution: 

const anagramMap = (a,b)=>{
  let p = [];
  for(let i = 0; i < a.length; i++){
    for(let j= 0; j < b.length;j++){
      if(a[i]=== b[j]){
        p.push(j);
      }
    }
  }
  return p;
}

anagramMap([12,28,46,32,50],[50,12,32,46,28])

//should return [1, 4, 3, 2, 0]