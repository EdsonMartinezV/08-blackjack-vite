/**
 * 
 * @param {Array<Number>} playersPoints Array containing players points, last index is IA's points
 */
export const choseWinner = (playersPoints) => {
  if (!playersPoints) throw new Error('playersPoints is required')

  const [ minPoints, iaPoints ] = playersPoints

  setTimeout(() => {
    if ((minPoints === 21 && iaPoints != 21) || (minPoints < 21 && (iaPoints < minPoints || iaPoints > 21))) {
      alert('You win!')
    } else if (minPoints === iaPoints) {
      alert('Drawn')
    } else {
      alert('IA wins')
    }
  }, 20) 
}