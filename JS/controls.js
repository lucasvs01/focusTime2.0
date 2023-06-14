export default function Controls({
    buttonRain,
    buttonCoffee,
    buttonFire,
    buttonFlorest,
    iconRain,
    iconFire,
    iconFlorest,
    iconCoffee
}){
     function activeButtonRainIfPress (){
        buttonRain.classList.add("pressButton")
        buttonCoffee.classList.remove("pressButton")
        buttonFire.classList.remove("pressButton")
        buttonFlorest.classList.remove("pressButton")
    
        iconRain.classList.add("pressButton")
        iconFire.classList.remove("pressButton")
        iconCoffee.classList.remove("pressButton")
        iconFlorest.classList.remove("pressButton")
     }

     function activeButtonFireIfPress (){
        buttonRain.classList.remove("pressButton")
        buttonCoffee.classList.remove("pressButton")
        buttonFire.classList.add("pressButton")
        buttonFlorest.classList.remove("pressButton")
    
        iconRain.classList.remove("pressButton")
        iconFire.classList.add("pressButton")
        iconCoffee.classList.remove("pressButton")
        iconFlorest.classList.remove("pressButton")
     }

     function activeButtonCoffeeIfPress (){
        buttonRain.classList.remove("pressButton")
        buttonCoffee.classList.add("pressButton")
        buttonFire.classList.remove("pressButton")
        buttonFlorest.classList.remove("pressButton")
    
        iconRain.classList.remove("pressButton")
        iconFire.classList.remove("pressButton")
        iconCoffee.classList.add("pressButton")
        iconFlorest.classList.remove("pressButton")
     }

     function activeButtonFlorestIfPress (){
        buttonRain.classList.remove("pressButton")
        buttonCoffee.classList.remove("pressButton")
        buttonFire.classList.remove("pressButton")
        buttonFlorest.classList.add("pressButton")
    
        iconRain.classList.remove("pressButton")
        iconFire.classList.remove("pressButton")
        iconCoffee.classList.remove("pressButton")
        iconFlorest.classList.add("pressButton")
     }

     return {activeButtonRainIfPress, activeButtonCoffeeIfPress, activeButtonFlorestIfPress, activeButtonFireIfPress}
}