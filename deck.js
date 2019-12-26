const SUITS = {
    HEARTS: {
        id: 'Hearts',
        label: '\u2764'
    },
    CLUBS: {
        id: 'Clubs',
        label: '\u2663'
    },
    DIAMONDS: {
        id: 'Diamonds',
        label: '\u2666'
    },
    SPADES: {
        id: 'Spades',
        label: '\u2660'
    }
}

const VALUES = {
    ACE: {
        id: 'Ace',
        label: 'A'
    },
    KING: {
        id: 'King',
        label: 'K'
    },
    QUEEN: {
        id: 'Queen',
        label: 'Q'
    },
    JACK: {
        id: 'Jack',
        label: 'J'
    },    
    C_10: {
        id: 'C10',
        label: '10'
    },
    C_9: {
        id: 'C9',
        label: '9'
    },
    C_8: {
        id: 'C8',
        label: '8'
    },
    C_7: {
        id: 'C7',
        label: '7'
    }
}

class Card {
    constructor (suit, value) {
        this.suit = suit
        this.value = value
    }

    getCard () {
        return {
            suit: this.suit,
            value: this.value
        }
    }

    getCardLabel () {
        return `${this.value.label}${this.suit.label}`
    }
}


class Deck {
    constructor () {
        this.cards = []

        const suites = Object.keys(SUITS)
        const values = Object.keys(VALUES)

        suites.forEach(s => {
            values.forEach(v => {
                this.cards.push(new Card(SUITS[s], VALUES[v]))
            })
        })
    }

    getDeck () {
        return this.cards
    }


    getDeckLabels () {
        return this.cards.map(c => c.getCardLabel())
    }
}

const aceOfSpades = new Card(SUITS.SPADES, VALUES.ACE)
const newDeck = new Deck()

console.log(newDeck.getDeckLabels())