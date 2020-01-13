const decompose = n =>  {
  let answer = [n-1]
  const total = n*n
  let f = answer.reduce(((a,b) => a-b*b), total)
  while (answer.reduce(((a,b) => a-b*b), total) > 1) {
    n = Math.floor(Math.sqrt(f))
    answer.unshift(n) //6
    f = answer.reduce(((a,b) => a-b*b), total)
    console.log(answer)
  }
  if  (f !== 0) return answer + 0
  return(answer)
}     
  //decompose(7100)
  decompose(625)


const duplicateEncode = word => word
.toLowerCase()
.split('')
.map( (curVal) => (word.indexOf(curVal) !== (word.lastIndexOf(curVal))) ? ')' : '(' )
.join('')



const rot13 = message =>
  const ascii = []
  message.toLowerCase()
  .split('')
  .map( (curVal, index, arr) => {(charCodeAt(index) > 96 && charCodeAt(index) < 123) ?  : curval })
  .join('')
