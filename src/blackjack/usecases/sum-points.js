import getCardPoints from "./get-card-points"

/**
 * 
 * @param {String} card Card to get points from
 * @param {Number} playerNumber 
 * @param {Array<Number>} playersPoints  Array containing players points, last index is IA's points
 * @param {Array<HTMLElement>} pointsSmalls Array containing <small> label of players points
 * @returns {Number} Currents points of playerNumber
 */
export const sumPoints = (card, playerNumber, playersPoints, pointsSmalls) => {
  playersPoints[playerNumber] += getCardPoints(card)
  pointsSmalls[playerNumber].innerText = playersPoints[playerNumber]
  return playersPoints[playerNumber]
}