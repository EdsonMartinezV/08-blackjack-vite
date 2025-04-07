/**
 * 
 * @param {String} card rank ans suit of card, example '2H'
 * @param {Number} turn current player number
 * @param {HTMLElement} cardsDivs DOM reference for players cards divs
 */
export const insertCard = (card, turn, cardsDivs) => {
  if (!card) throw new Error('card was required');
  if (turn == null) throw new Error('turn was required');
  if (!cardsDivs) throw new Error('cardsDivs was required');

  const cardImg = document.createElement('img')
  cardImg.src = `assets/cards/${card}.png`
  cardImg.classList.add('poker-card')
  cardsDivs[turn].append(cardImg)
}