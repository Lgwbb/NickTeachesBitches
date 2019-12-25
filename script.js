const cards = {
  wholePack: ['1H','2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KH','1D','2D','3D','4D','5D','6D','7D','8D','9D','10D','JD','QD','KD','1С','2С','3С','4С','5С','6С','7С','8С','9С','10С','JС','QС','KС','1S','2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS','KS'],
  tableCards: [],
  player0:{
    hand: []
  },
  player1:{
    hand: [],
  },
  player2:{
    hand: [],
  },
  player3:{
    hand: [],
  },
  player4:{
    hand: [],
  },
  player5:{
    hand: [],
  },
  player6:{
    hand: [],
  },
}

let numberOfPlayers = 6
// Получить кол-во игроков
//howManyPlayers =

let cardsLeft = cards.wholePack.length

// Функция сдать 1 карту
const drawCard = () => {
let random = Math.floor(Math.random() * cardsLeft)
let theCard = cards.wholePack[random]
cardsLeft--
cards.wholePack.splice(random, 1)
return theCard
}

// сдаем карты игрокам
for (var i = 0; i < numberOfPlayers; i++) {
cards['player' + i].hand.push(drawCard())
cards['player' + i].hand.push(drawCard())
document.querySelector('.playerCards_' + i).textContent = cards['player' + i].hand;
}

// сдаём стол
for (var i = 0; i < 5; i++) {
  cards.tableCards[i] = drawCard()
  document.querySelector('.card_' + i).textContent = cards.tableCards[i];
}


// Консолька для души!
console.log(`${cards.player0.hand} 1st player hand`);
console.log(`${cardsLeft} cards left in a deck`);
console.log(`${cards.wholePack.length} cards left in a deck`);
