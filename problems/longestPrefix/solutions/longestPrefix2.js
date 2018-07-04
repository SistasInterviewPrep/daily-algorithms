function LongestPrefix (array){
        var dup = {};
        let splitWord = array.map(word => word.split(""))
        let flattenArr = splitWord.reduce( (a,b) => a.concat(b) )
          flattenArr.forEach( (letter,index)=>{
              dup.hasOwnProperty(letter) ? dup[letter]++ : dup[letter] = 1
          })
      
      }
      
      LongestPrefix(["flower","flow","flight"])