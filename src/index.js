"use strict"

require('../css/style.css');

const KEY_ENTER = 13

const {getNewDeck, drawCard} = require (`./gettingCards`)

const dealer = {
    cards: [],
    cardvalue: 0,

    getCardValue(){    
        this.cardvalue = 0   
        for (const card of this.cards){
            if(card.value === "JACK" | card.value === "QUEEN" | card.value === "KING") card.value = 10
            if(card.value === "ACE") card.value = 11
            this.cardvalue += parseInt(card.value)
        }
    },
}

const player = {
    cards: [],
    cardvalue:0,
    money: 100,
    bet: 0,

    getCardValue(){   
        this.cardvalue = 0    
        for (const card of this.cards){
            if(card.value === "JACK" | card.value === "QUEEN" | card.value === "KING") card.value = 10
            if(card.value === "ACE") card.value = 11
            this.cardvalue += parseInt(card.value)
        }
    },
    refreshMoney(){
        playersMoney.innerText = this.money
    },
    aceCounter(){
        let innerAceCounter = 0
           for(const card of this.cards){
               if (card.value === 11){
                   innerAceCounter++
               }
           }
           if (innerAceCounter !== AceCounter){
               AceCounter = innerAceCounter-aceTaken
           }
       }
}

const outcomeMultiplier = {
    BlackJack: 1.5,
    TripleSeven: 1.5,
    Bust: 0,
    DealerBust: 2,
    LowerThanDealer: 0,
    HigherThanDealer: 2
}

    //-----------Variables-----------------------------------------

    let bedTime = false // "betTime...just a joke"
    
    let deck_ID = ""
    let playersHitCount = 0
    let dealersHitCount = 0
    let firstTime = true
    let AceCounter = 0
    let playersTurn = false
    let dealersTurn = false
    let aceTaken = 0

document.addEventListener("DOMContentLoaded", () => {

    const dealersHand = document.getElementById("dealersHand")
    const dealersCards = document.querySelectorAll(".dealersCard")
    const dealersHiddenCard = document.getElementById("dealersHiddenCard")
    const playersHand = document.getElementById("playersHand")
    const playersInitialCards = document.getElementsByClassName("playersCard")
    const hitButton = document.getElementById("hit")
    const stayButton = document.getElementById("stay")
    const newGame = document.getElementById("newGame")
    const playersMoney = document.getElementById("playersMoney")
    const betInput = document.getElementById("betInput")
    const bet = document.getElementById("bet")
    const popUpWindow = document.getElementById("popUpWindow")
    const instructions = document.getElementById("instructions")


    function blackJack() {
        showInstructions(`Black Jack! You won ${outcomeMultiplier.BlackJack * player.bet}€`,2500)//-------------DEALERS INSTRUCTION
        player.money += outcomeMultiplier.BlackJack * player.bet
        player.refreshMoney()
        playersTurn = false
    }
    
    function tripleSeven(){
        showInstructions(`WoW! Triple Seven! You won ${outcomeMultiplier.TripleSeven * player.bet}€`,2500)//-------------DEALERS INSTRUCTION
        player.money += outcomeMultiplier.tripleSeven * player.bet
        player.refreshMoney()
        playersTurn = false
    
    }
    
    function higherThanDealer(){
        showInstructions(`Good game! You won ${outcomeMultiplier.HigherThanDealer * player.bet}€`,2500)//-------------DEALERS INSTRUCTION
        player.money += outcomeMultiplier.HigherThanDealer * player.bet
        player.refreshMoney()
        dealersTurn = false
    }
    
    function dealerBust(){
        showInstructions(`My cardvalue is too high...you win ${outcomeMultiplier.DealerBust * player.bet}`,2500)//-------------DEALERS INSTRUCTION
        player.money += outcomeMultiplier.DealerBust * player.bet
        player.refreshMoney()
        dealersTurn = false
    }
    
    function push(){
        showInstructions(`Push! We have the same cardvalue, you get your bet back!`,2500)//-------------DEALERS INSTRUCTION
        player.money += parseInt(player.bet)
        player.refreshMoney()
        dealersTurn = false
    }

    //Set moneyvalue to players money
    playersMoney.innerText = player.money

    setTimeout(() => {
        if(firstTime)
       showInstructions('Click "New Game" to start!',1500)//-------------DEALERS INSTRUCTION
    },1000)

    //NewGame--------------------------------------------------x
    newGame.addEventListener("click", () => {
        getNewDeck().then(function (deck_id) {
            deck_ID = deck_id
        })

        dealersCards[1].style = "display: none"
        dealersCards[2].style = "display: none"

        player.bet = 0
        bet.innerText = player.bet

        dealer.cards = []
        dealer.cardvalue = 0
        player.cards = []
        player.cardvalue = 0

        AceCounter = 0


        //remove old dealerCards------------------
        for(const card of dealersCards){
            card.src = ""
        }
        //remove old playerInitialCards------------------

        for (const card of playersInitialCards){
            card.src = ""
        }
        //remove old playerHitCards------------------ 
        for (let i = 1; i <= playersHitCount; i++) {
            let playersHitCard = document.getElementById(`playersHitCard ${i}`)
            playersHitCard.remove()
        }

        //remove old dealerHitCards------------------ 
        for (let i = 1; i <= dealersHitCount; i++) {
            let dealersHitCard = document.getElementById(`dealersHitCard ${i}`)
            dealersHitCard.remove()
        }

        playersHitCount = 0
        dealersHitCount = 0
        bedTime = true
        playersTurn = false
        dealersTurn = false

        setTimeout(() => {
            if(firstTime){
                showInstructions('Make your bet!',1000)//-------------DEALERS INSTRUCTION
            }
        },250)



    })

    //MakeABet-DealTheCards--------------------------------------------
    betInput.addEventListener("keyup", (event) => {
        if (bedTime){
            if (event.keyCode === KEY_ENTER && betInput.value !== ""){
                if (betInput.value > player.money){
                    showInstructions("You don't have that much money to bet!",1000)//-------------DEALERS INSTRUCTION
                }
                else{
                    player.bet = betInput.value
                    bet.innerText = player.bet
                    player.money -= player.bet
                    player.refreshMoney()
                    
                    bedTime = false 
                    playersTurn = true
                    betInput.value = ""
                

                //DealersHand-1FaceUp-1FaceDow--------------------------------                    
                drawCard(deck_ID, 2).then((response) => {
                    dealer.cards = response
                    dealersCards[0].src = dealer.cards[0].image
                    dealersCards[1].src = dealer.cards[1].image
                    dealersCards[2].style = "display:"
                    dealer.getCardValue()
                })

                //PlayersHand-2FaceUp------------------------------------
                drawCard(deck_ID, 2).then((response) => {
                    player.cards = response
                    playersInitialCards[0].src = player.cards[0].image
                    playersInitialCards[1].src = player.cards[1].image
                    player.getCardValue()
                    player.aceCounter()
                    setTimeout(() => {checkWinningLosingConditions()},1000)
                })
            }}
        }
    })
    //HitOrStayPhase-------------------------------------------------
    hitButton.addEventListener("click", () => {
        if(playersTurn)
        drawCard(deck_ID, 1)
        .then((response) => {
            player.cards.push(response[0])           
            const newCard = document.createElement("img")
            newCard.setAttribute("id", `playersHitCard ${playersHitCount+1}`)
            newCard.src = response[0].image
            playersHand.appendChild(newCard)
            player.getCardValue()
            player.aceCounter()
            playersHitCount++
            setTimeout(() => {checkWinningLosingConditions()},250)
        })
    })
    //pressStayButton----------dealersTurn=>true----------------------------
    stayButton.addEventListener("click", () => {
        
        playersTurn = false
        dealersTurn = true
        dealersHiddenCard.style = "display: none"
        dealersCards[1].style = "display:"
        if (dealer.cardvalue < 17){
            setTimeout(() => {
                showInstructions("I have to take more cards",1000)
                dealersHitCards()
            },1000)
        } else{
            setTimeout(() => {checkWinningLosingConditions()},500)
        }
    })

    //----------------------dealersComments--------------------
    function showInstructions(instruction,showTime){
        instructions.innerText = instruction
        popUpWindow.showModal()
        
        setTimeout(() => {
            popUpWindow.close()
        },showTime) 
    }
    
    //-----------------------dealersAutomaticHitFunction-------------------------
    function dealersHitCards(){
        setTimeout(() => {
            drawCard(deck_ID,1)
            .then((response) => {
                dealer.cards.push(response[0])
                const newCard = document.createElement("img")
                newCard.setAttribute("id", `dealersHitCard ${dealersHitCount+1}`)
                newCard.src = response[0].image
                dealersHand.appendChild(newCard)
                dealer.getCardValue()
                dealersHitCount++
                if (dealer.cardvalue < 17){
                    dealersHitCards()
                }else {
                    {setTimeout(() => {checkWinningLosingConditions()},500)}
                }
            }) 
        },2500)
    }
    
    //________________________WIN CONDITIONS_____________________________________
    function checkWinningLosingConditions(){
        //-----------------------------playersTurn--------------------------------
        if(playersTurn){
        
        //------------------------blackJack-------------------------
        if(player.cards.length === 2){
            if(player.cardvalue === 21){
                
                playersTurn = false
                dealersTurn = true
                dealersHiddenCard.style = "display: none"
                dealersCards[1].style = "display:"
                
                if (dealer.cardvalue === 21){
                    setTimeout(() => {push()},1000)
                } else{
                    setTimeout(() => {blackJack()},1000)
                    dealersTurn = false
                }
            }
        } 

        //---------------tripleSeven-------------------
        if(player.cards.length === 3){
            if(player.cards[0].value === "7" && player.cards[1].value === "7" && player.cards[2].value === "7"){
                tripleSeven()
            }
        }

        //----------------morethan21 --> checking for Aces---------------
        if (player.cardvalue > 21){
            if (AceCounter !== 0){
                player.cardvalue -= 10
                aceTaken++
            }
            //---------------------morethan21 --> lose-----------------------------
            if (player.cardvalue > 21){
                showInstructions(`Bust! Your cardvalue of ${player.cardvalue} is too high. You lost your bet!`,2500)//-------------DEALERS INSTRUCTION
                playersTurn = false
            }
        }
        
        //------------------------dealersTurn-------------------------------------
    }
    if (dealersTurn){
        if(dealer.cardvalue <= 21 && dealer.cardvalue > player.cardvalue){
            showInstructions(`You lose against the dealer with ${player.cardvalue} to ${dealer.cardvalue}!`,2500)//-------------DEALERS INSTRUCTION
            dealersTurn = false
        }else
        if(dealer.cardvalue > 21){
            dealerBust()
        }
        if(dealer.cardvalue < player.cardvalue){
            higherThanDealer()
        }
        if(dealer.cardvalue === player.cardvalue){
            push()
        }
    }
}
})