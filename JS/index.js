import Sounds from "./sounds.js"
import Controls from "./controls.js";
import Timer from "./timer.js"
import {buttonRain, buttonFire, buttonFlorest,buttonCoffee, iconRain, iconFire, iconCoffee, iconFlorest, buttonPlay, buttonStop, buttonPlus, buttonMinus, secondsDisplay, minutesDisplay } from "./elements.js"

let controls = Controls({
    buttonRain,
    buttonCoffee,
    buttonFire,
    buttonFlorest,
    iconRain,
    iconFire,
    iconFlorest,
    iconCoffee
})

let sounds = Sounds()

let timer = Timer({
    secondsDisplay,
    minutesDisplay,
    
})
  
    buttonPlay.addEventListener("click", function(){
        timer.coutdown()
    })
    
    buttonStop.addEventListener("click", function() {
        timer.stop()
    })

    buttonPlus.addEventListener("click", function(){
        timer.PlusFiveMinutesInTimer()
    })

    buttonMinus.addEventListener("click", function() {
        timer.MinusFiveMinutesInTimer()
    })

    buttonRain.addEventListener("click", function(){
        controls.activeButtonRainIfPress()
        sounds.soundRain()
    })
    
    buttonFire.addEventListener("click", function(){
        controls.activeButtonFireIfPress()
        sounds.soundFire()
    })
    
    buttonCoffee.addEventListener("click", function(){
        controls.activeButtonCoffeeIfPress()
        sounds.soundCoffee()
    })
    
    buttonFlorest.addEventListener("click", function(){
        controls.activeButtonFlorestIfPress()
        sounds.soundFlorest()
    })
