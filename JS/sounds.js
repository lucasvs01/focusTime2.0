import {rangeFlorest, rangeRain, rangeCoffee, rangeFire} from "./elements.js"

const florestSound = new Audio("./assets/Floresta.wav")
const rainSound = new Audio("./assets/Chuva.wav")
const fireSound = new Audio("./assets/Lareira.wav")
const coffeeSound = new Audio("./assets/Cafeteria.wav")






export default function Sounds (){
    function soundRain (){
        florestSound.pause()
        rainSound.play()
        rainSound.loop = true
        fireSound.pause()
        coffeeSound.pause()
        rainSound.volume = rangeRain.value


    }

    function soundFire (){
        florestSound.pause()
        rainSound.pause()
        fireSound.play()
        fireSound.loop =true
        coffeeSound.pause()
        fireSound.volume = rangeFire.value

    }

    function soundCoffee (){
        florestSound.pause()
        rainSound.pause()
        fireSound.pause()
        coffeeSound.play()
        coffeeSound.loop = true
        coffeeSound.volume = rangeCoffee.value

    }

    function soundFlorest (){
        florestSound.play()
        florestSound.loop = true
        rainSound.pause()
        fireSound.pause()
        coffeeSound.pause()
        florestSound.volume = rangeFlorest.value
            
    }

    function reset(){
        florestSound.pause()
        rainSound.pause()
        fireSound.pause()
        coffeeSound.pause()
        rangeFlorest.value = 0.5
        rangeCoffee.value = 0.5
        rangeRain.value = 0.5
        rangeFire.value = 0.5
    }

    return {
        soundCoffee,
        soundFire,
        soundFlorest,
        soundRain, 
        reset
        }
}