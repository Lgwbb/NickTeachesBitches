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