/**
 * Returns the next card from a deck
 * @param {Array<String>} deck Example: ['2H', '4C', ... , '4D']
 * @returns {String} Example: '4D'
 */
const pullCard = (deck) => {
  if (!deck) {
    throw new Error('There\'s no cards in this deck')
  }

  if (deck.length === 0) {
    throw new Error('No more cards :(');
  }
  return deck.pop()
}

export default pullCard