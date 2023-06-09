import {florestSound, rainSound, fireSound, coffeeSound} from "./sounds.js"

const buttonRain = document.querySelector(".card-rain");
const buttonFire = document.querySelector(".card-fire");
const buttonFlorest = document.querySelector(".card-florest");
const buttonCoffee = document.querySelector(".card-coffee");
const iconRain = document.querySelector("#rain path")
const iconFire = document.querySelector("#fire path")
const iconCoffee = document.querySelector("#coffee path")
const iconFlorest = document.querySelector("#florest path")

const buttonPlay = document.querySelector("#buttonPlay")
const buttonStop = document.querySelector("#buttonStop")
const buttonPlus = document.querySelector("#buttonPlus")
const buttonMinus = document.querySelector("#buttonMinus")


let secondsDisplay = document.querySelector(".seconds")
let minutesDisplay = document.querySelector(".minutes")
let Timerout

function coutdown(){
    Timerout = setTimeout(function(seconds, minutes){

        seconds = Number(secondsDisplay.textContent)
        minutes = Number(minutesDisplay.textContent)

    
        
        if(minutes <= 0 && seconds <= 0){
            return
        }

        
        if(seconds <= 0){
            seconds = 60
            
            minutesDisplay.textContent = String(minutes - 1).padStart(2, "00")
            
        }
        
        secondsDisplay.textContent = String(seconds - 1).padStart(2, "00")
        coutdown()
    }, 1000) 
        
    }
    
    buttonPlay.addEventListener("click", function(){
        coutdown()
    })
    
    buttonStop.addEventListener("click", function() {
        clearTimeout(Timerout)
    })

    buttonPlus.addEventListener("click", function(){
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "00")
    })

    buttonMinus.addEventListener("click", function() {
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "00")

        if(minutesDisplay.textContent <= 0){
            minutesDisplay.textContent = "00"
        }
    })

    buttonRain.addEventListener("click", function(){
        buttonRain.classList.add("pressButton")
        buttonCoffee.classList.remove("pressButton")
        buttonFire.classList.remove("pressButton")
        buttonFlorest.classList.remove("pressButton")
    
        iconRain.classList.add("pressButton")
        iconFire.classList.remove("pressButton")
        iconCoffee.classList.remove("pressButton")
        iconFlorest.classList.remove("pressButton")
    
        florestSound.pause()
        rainSound.play()
        rainSound.loop = true
        fireSound.pause()
        coffeeSound.pause()
    })
    
    buttonFire.addEventListener("click", function(){
        buttonRain.classList.remove("pressButton")
        buttonCoffee.classList.remove("pressButton")
        buttonFire.classList.add("pressButton")
        buttonFlorest.classList.remove("pressButton")
    
        iconRain.classList.remove("pressButton")
        iconFire.classList.add("pressButton")
        iconCoffee.classList.remove("pressButton")
        iconFlorest.classList.remove("pressButton")
    
        florestSound.pause()
        rainSound.pause()
        fireSound.play()
        fireSound.loop =true
        coffeeSound.pause()
    })
    
    buttonCoffee.addEventListener("click", function(){
        buttonRain.classList.remove("pressButton")
        buttonCoffee.classList.add("pressButton")
        buttonFire.classList.remove("pressButton")
        buttonFlorest.classList.remove("pressButton")
    
        iconRain.classList.remove("pressButton")
        iconFire.classList.remove("pressButton")
        iconCoffee.classList.add("pressButton")
        iconFlorest.classList.remove("pressButton")
    
        florestSound.pause()
        rainSound.pause()
        fireSound.pause()
        coffeeSound.play()
        coffeeSound.loop = true
    
    })
    
    buttonFlorest.addEventListener("click", function(){
        buttonRain.classList.remove("pressButton")
        buttonCoffee.classList.remove("pressButton")
        buttonFire.classList.remove("pressButton")
        buttonFlorest.classList.add("pressButton")
    
        iconRain.classList.remove("pressButton")
        iconFire.classList.remove("pressButton")
        iconCoffee.classList.remove("pressButton")
        iconFlorest.classList.add("pressButton")
    
        florestSound.play()
        florestSound.loop = true
        rainSound.pause()
        fireSound.pause()
        coffeeSound.pause()
    
    
    })
