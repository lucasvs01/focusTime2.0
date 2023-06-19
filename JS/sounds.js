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

    }

    function soundFire (){
        florestSound.pause()
        rainSound.pause()
        fireSound.play()
        fireSound.loop =true
        coffeeSound.pause()
    }

    function soundCoffee (){
        florestSound.pause()
        rainSound.pause()
        fireSound.pause()
        coffeeSound.play()
        coffeeSound.loop = true
    }

    function soundFlorest (){
        florestSound.play()
        florestSound.loop = true
        rainSound.pause()
        fireSound.pause()
        coffeeSound.pause()
            
    }

    function reset(){
        florestSound.pause()
        rainSound.pause()
        fireSound.pause()
        coffeeSound.pause()    
    }

    return {
        soundCoffee,
        soundFire,
        soundFlorest,
        soundRain, 
        reset
    }
}