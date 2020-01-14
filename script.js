const decompose = n =>  { //625
  let answer = [n-1] //624
  let ostatok = 2*n-1 // 1249
  let floorKorenOstatka, counter = 0
  while (ostatok !== 0) {//1-1249/2-24/3-8/
    floorKorenOstatka = Math.floor(Math.sqrt(ostatok))
    answer.unshift(floorKorenOstatka) //1-35/2-4/3-2/4-2/
    ostatok = ostatok - floorKorenOstatka * floorKorenOstatka //1-24/2-8/3-4/4-0
    counter++
    if (counter === 20 || answer.includes(0)) {
      answer = answer.slice(answer.length - 1)
      answer[0] = answer[0] - 1
      ostatok = n*n - answer[0] * answer[0]
    }
    if (answer[0] === answer[1] || ostatok === 2 || ostatok === 3 ) {
      answer = answer.slice(answer.length - 2)
      answer[0] = answer[0] - 1
      ostatok = 2*n-1 - answer[0] * answer[0]
    }

    console.log(ostatok);
    console.log(answer);
  }
  return console.log(answer.sort((a,b) => a < b));
}    
decompose(12) 


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
