"use strict"

const axios = require("axios")


module.exports.drawCard = function drawCard(deck_id,count){
    return axios.get(`https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${count}`)
    .then(function(response){
        return (response.data.cards)
    })
}

/*
  cards: [
    {
      code: '0C',
      image: 'https://deckofcardsapi.com/static/img/0C.png',
      images: [Object],
      value: '10',
      suit: 'CLUBS'
    }
  ]
*/

module.exports.getNewDeck = function getNewDeck(){
    return axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6`)
    .then((response) => {
        return (response.data.deck_id)}) 
    }
/*
    data = {
        success: true,
        deck_id: 'jw8i751mkeni',
        cards: [],
        remaining: 311
    }
*/
