const cards = {
  wholePack: [],
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

// объявление глобалов
let numberOfPlayers, cardsLeft


//You wanna play? Let's play!

let play = () => {
  numberOfPlayers = document.getElementById('selectNumberOfPlayers').value //получаем кол-во игроков от юзера
  cards.wholePack = ['AH','2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KH','AD','2D','3D','4D','5D','6D','7D','8D','9D','10D','JD','QD','KD','AC','2C','3C','4C','5C','6C','7C','8C','9C','10C','JC','QC','KC','AS','2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS','KS'] // восстанавливаем карты в колоде
  cardsLeft = cards.wholePack.length // резетим кол-во оставшихся карт в колоде
  playersDrawCards()
  tableDrawCards()
}

// Функция сдать 1 карту
const drawCard = () => {
  let random = Math.floor(Math.random() * cardsLeft)
  let theCard = cards.wholePack[random]
  cardsLeft--
  cards.wholePack.splice(random, 1)
  return theCard
}

// сдаем карты игрокам
const playersDrawCards = () => {
    for (var i = 0; i < numberOfPlayers; i++) {
        let firstCard = drawCard()
        console.log(firstCard);
        cards['player' + i].hand.push(firstCard)
        let secondCard = drawCard()
        console.log(secondCard);
        cards['player' + i].hand.push(secondCard)
        document.querySelector('.playerCards_' + i + '_1').innerHTML = `<img src="C:/Users/tugov_s/Desktop/JS/cards/${firstCard}.png" style="width:128px;height:153px;float:left;">`
        document.querySelector('.playerCards_' + i + '_2').innerHTML = `<img src="C:/Users/tugov_s/Desktop/JS/cards/${secondCard}.png"style="width:128px;height:153px;float:left;margin-right:25px;">`
  }
}

// сдаём стол
const tableDrawCards = () => {
    for (var i = 0; i < 5; i++) {
      let tableCard = drawCard()
      cards.tableCards[i] = tableCard
      document.querySelector('.card_' + i).innerHTML = `<img src="C:/Users/tugov_s/Desktop/JS/cards/${tableCard}.png" style="width:128px;height:153px;float:left;margin-right:2px;">`
    }
}
// Кнопка начать игру!
document.getElementById('StartTheGame').addEventListener('click', () => play())

// Консолька для души!
console.log(`${cards.player0.hand} 1st player hand`);
console.log(`${cardsLeft} cards left in a deck`);
console.log(`${cards.wholePack.length} cards left in a deck`);
