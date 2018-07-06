function LongestPrefix (array){
    var dup = {};
    let splitWord = array.map(word => word.split(""))
    let flattenArr = splitWord.reduce( (a,b) => a.concat(b) )
      flattenArr.forEach( (letter,index)=>{
          dup.hasOwnProperty(letter) ? dup[letter]++ : dup[letter] = 1
      })
console.log(dup)
  for(let key in dup ){
       for(let j in dup){
            if(dup[key] < dup[j] && dup[j] === array.length){
              delete dup[key]
          }
          else{
            continue
          }
       }
        
  }
 let prefix =  Object.keys(dup).join("")
  array.forEach( word => {
    if(word.indexOf(prefix) < 0){
      prefix = ""
    }
  })
  return prefix
}
  
  LongestPrefix(["flower","flow","flight"])