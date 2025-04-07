import _ from 'underscore';

export const a = 'test'

/**
 * 
 * @returns {Array<string>}
 */
const createDeck = () => {
  let deck = []
  const ranks = _.range(2, 11).concat(['J', 'Q', 'K', 'A']),
        suits = ['C', 'D', 'H', 'S']

  for (let rank of ranks) {
    for (let suit of suits) {
      deck.push(rank + suit)
    }
  }

  return _. shuffle(deck)
}

export default createDeck