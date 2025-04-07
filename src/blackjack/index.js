import _ from 'underscore';
import { createDeck as newDeck, pullCard, insertCard, sumPoints, iaTurn } from './usecases';

/* MODULE PATTERN */
/* ANONYMOUS AUTO CALLED FUNCTION */
/* As every function, it could return something */
/* Whatever you return is visible outside the module */
const aModule = (() => {
  'use strict'

  /**
   * C = Clubs
   * D = Diamonds
   * H = Hearts
   * S = Spades
   */

  let deck = []
  let playersPoints = []

  /* DOM REFERENCES */
  const newGameButton = document.querySelector('#newGameButton'),
        pullCardButton = document.querySelector('#pullCardButton'),
        stopButton = document.querySelector('#stopButton'),
        pointsSmalls = document.querySelectorAll('small'),
        cardsDivs = document.querySelectorAll('.cardsDiv')

  /* GAME FUNCTIONALITIES */

  const startGame = (playersQuantity = 2) => {
    deck = newDeck()
    playersPoints = []
    for (let i = 0; i < playersQuantity; i++) {
      playersPoints.push(0)
    }

    pointsSmalls.forEach((small) => small.innerText = '0')
    cardsDivs.forEach((div) => div.innerHTML = null)
    pullCardButton.disabled = false
    stopButton.disabled = false
  }

  /* EVENTS */
  pullCardButton.addEventListener('click', () => {
    /* pull card */
    const card = pullCard(deck)
    const playerPoints = sumPoints(card, 0, playersPoints, pointsSmalls)
    insertCard(card, 0, cardsDivs)

    /* Check player points */
    if (playerPoints > 21) {
      console.warn('You lose :(')
      pullCardButton.disabled = true
      stopButton.disabled = true
      iaTurn(playerPoints, deck, playersPoints, cardsDivs, pointsSmalls)
    } else if (playerPoints === 21) {
      console.warn('Hey! 21')
      pullCardButton.disabled = true
      stopButton.disabled = true
      iaTurn(playerPoints, deck, playersPoints, cardsDivs, pointsSmalls)
    }
  })

  stopButton.addEventListener('click', () => {
    pullCardButton.disabled = true
    stopButton.disabled = true
    iaTurn(playersPoints[0], deck, playersPoints, cardsDivs, pointsSmalls)
  })

  newGameButton.addEventListener('click', () => {
    console.clear()
    startGame()
  })

  return {
    newGame: startGame
  }
})()