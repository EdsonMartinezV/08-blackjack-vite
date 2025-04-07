import pullCard from "./pull-card";
import { insertCard } from "./insert-card";
import { sumPoints } from "./sum-points";
import { choseWinner } from "./choose-winner";

/**
 * 
 * @param {Number} minPoints min points ia needs to win
 * @param {Array<String>} deck remaining cards
 * @param {Array<Number>} playersPoints Array containing players points, last index is IA's points
 * @param {HTMLElement} cardsDivs DOM reference for players cards divs
 */
export const iaTurn = (minPoints, deck, playersPoints, cardsDivs, pointsSmalls) => {
  let iaPoints = 0

  do {
    const card = pullCard(deck)
    iaPoints = sumPoints(card, playersPoints.length - 1, playersPoints, pointsSmalls)
    insertCard(card, playersPoints.length - 1, cardsDivs)

  } while ((iaPoints < minPoints) && (minPoints <= 21))

  choseWinner(playersPoints)
}