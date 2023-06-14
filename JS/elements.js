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

export {buttonRain, buttonFire, buttonFlorest,buttonCoffee, iconRain, iconFire, iconCoffee, 
    iconFlorest, buttonPlay, buttonStop, buttonPlus, buttonMinus, secondsDisplay, minutesDisplay
}