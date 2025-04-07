/**
 * Returns the given card's points
 * @param {String} card Example: 'JH'
 * @returns {Number} Example '10'
 */
const getCardPoints = (card) => {
  const rank = card.substring(0, card.length - 1)
  return (isNaN(rank)) ? ((rank === 'A') ? 11 : 10) : rank * 1 // parse rank to int
}

export default getCardPoints