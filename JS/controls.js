export default function Controls({
    buttonRain,
    buttonCoffee,
    buttonFire,
    buttonFlorest,
    iconRain,
    iconFire,
    iconFlorest,
    iconCoffee,
    body,
    darkIcon, 
    lightIcon,
    svgPathMinus, svgPathPlay, svgPathStop, svgPathPlus
    

}){
     function activeButtonRainIfPress (){

      if(body.classList.value == ""){
         buttonRain.classList.add("pressButton")
         buttonCoffee.classList.remove("pressButton")
         buttonFire.classList.remove("pressButton")
         buttonFlorest.classList.remove("pressButton")
      
         iconRain.classList.add("pressButton")
         iconFire.classList.remove("pressButton")
         iconCoffee.classList.remove("pressButton")
         iconFlorest.classList.remove("pressButton")
 }
     else if(body.classList.value == "darkmode-body"){
         buttonRain.classList.add("darkmode-cards-press")
         buttonCoffee.classList.remove("darkmode-cards-press")
         buttonFire.classList.remove("darkmode-cards-press")
         buttonFlorest.classList.remove("darkmode-cards-press")
      
         iconRain.classList.add("darkmode-cards-press")
         iconFire.classList.remove("darkmode-cards-press")
         iconCoffee.classList.remove("darkmode-cards-press")
         iconFlorest.classList.remove("darkmode-cards-press")
   }
     }

     function activeButtonFireIfPress (){
      if(body.classList.value == ""){
         buttonRain.classList.remove("pressButton")
         buttonCoffee.classList.remove("pressButton")
         buttonFire.classList.add("pressButton")
         buttonFlorest.classList.remove("pressButton")
      
         iconRain.classList.remove("pressButton")
         iconFire.classList.add("pressButton")
         iconCoffee.classList.remove("pressButton")
         iconFlorest.classList.remove("pressButton")

      }
      else if(body.classList.value == "darkmode-body"){
         buttonRain.classList.remove("darkmode-cards-press")
         buttonCoffee.classList.remove("darkmode-cards-press")
         buttonFire.classList.add("darkmode-cards-press")
         buttonFlorest.classList.remove("darkmode-cards-press")

         iconRain.classList.remove("darkmode-cards-press")
         iconFire.classList.add("darkmode-cards-press")
         iconCoffee.classList.remove("darkmode-cards-press")
         iconFlorest.classList.remove("darkmode-cards-press")
      }
     }

     function activeButtonCoffeeIfPress (){

      if(body.classList.value == ""){
         buttonRain.classList.remove("pressButton")
         buttonCoffee.classList.add("pressButton")
         buttonFire.classList.remove("pressButton")
         buttonFlorest.classList.remove("pressButton")
     
         iconRain.classList.remove("pressButton")
         iconFire.classList.remove("pressButton")
         iconCoffee.classList.add("pressButton")
         iconFlorest.classList.remove("pressButton")
      }
      else if(body.classList.value == "darkmode-body"){
         buttonRain.classList.remove("darkmode-cards-press")
         buttonCoffee.classList.add("darkmode-cards-press")
         buttonFire.classList.remove("darkmode-cards-press")
         buttonFlorest.classList.remove("darkmode-cards-press")

         iconRain.classList.remove("darkmode-cards-press")
         iconFire.classList.remove("darkmode-cards-press")
         iconCoffee.classList.add("darkmode-cards-press")
         iconFlorest.classList.remove("darkmode-cards-press")
      }
     }

     function activeButtonFlorestIfPress (){
      if(body.classList.value == ""){
         buttonRain.classList.remove("pressButton")
         buttonCoffee.classList.remove("pressButton")
         buttonFire.classList.remove("pressButton")
         buttonFlorest.classList.add("pressButton")

         iconRain.classList.remove("pressButton")
         iconFire.classList.remove("pressButton")
         iconCoffee.classList.remove("pressButton")
         iconFlorest.classList.add("pressButton")
      }
      else if(body.classList.value == "darkmode-body"){
         buttonRain.classList.remove("darkmode-cards-press")
         buttonCoffee.classList.remove("darkmode-cards-press")
         buttonFire.classList.remove("darkmode-cards-press")
         buttonFlorest.classList.add("darkmode-cards-press")

         iconRain.classList.remove("darkmode-cards-press")
         iconFire.classList.remove("darkmode-cards-press")
         iconCoffee.classList.remove("darkmode-cards-press")
         iconFlorest.classList.add("darkmode-cards-press")
      }
     }

      function resetStyleButtons (){
        buttonRain.classList.remove("pressButton")
        buttonCoffee.classList.remove("pressButton")
        buttonFire.classList.remove("pressButton")
        buttonFlorest.classList.remove("pressButton")
        iconRain.classList.remove("pressButton")
        iconFire.classList.remove("pressButton")
        iconCoffee.classList.remove("pressButton")
        iconFlorest.classList.remove("pressButton")

         buttonRain.classList.remove("darkmode-cards-press")
         buttonCoffee.classList.remove("darkmode-cards-press")
         buttonFire.classList.remove("darkmode-cards-press")
         buttonFlorest.classList.remove("darkmode-cards-press")
         iconRain.classList.remove("darkmode-cards-press")
         iconFire.classList.remove("darkmode-cards-press")
         iconCoffee.classList.remove("darkmode-cards-press")
         iconFlorest.classList.remove("darkmode-cards-press")

      }

     function activeDarkModeIfPress (){
         body.classList.add("darkmode-body")
         lightIcon.classList.add("hide")
         darkIcon.classList.remove("hide")
         buttonRain.classList.add("darkmode-cards")
         buttonFire.classList.add("darkmode-cards")
         buttonCoffee.classList.add("darkmode-cards")
         buttonFlorest.classList.add("darkmode-cards")
         iconRain.classList.add("darkmode-svg")
         iconCoffee.classList.add("darkmode-svg")
         iconFire.classList.add("darkmode-svg")
         iconFlorest.classList.add("darkmode-svg")

         svgPathPlus.classList.add("darkmode-svg")
         svgPathPlay.classList.add("darkmode-svg")
         svgPathStop.classList.add("darkmode-svg")
         svgPathMinus.classList.add("darkmode-svg")

         

     }

     function activeLightModeIfPress(){
      body.classList.remove("darkmode-body")
      lightIcon.classList.remove("hide")
      darkIcon.classList.add("hide")
      buttonRain.classList.remove("darkmode-cards")
      buttonFire.classList.remove("darkmode-cards")
      buttonCoffee.classList.remove("darkmode-cards")
      buttonFlorest.classList.remove("darkmode-cards")
      iconRain.classList.remove("darkmode-svg")
      iconCoffee.classList.remove("darkmode-svg")
      iconFire.classList.remove("darkmode-svg")
      iconFlorest.classList.remove("darkmode-svg")

      svgPathPlus.classList.remove("darkmode-svg")
      svgPathPlay.classList.remove("darkmode-svg")
      svgPathStop.classList.remove("darkmode-svg")
      svgPathMinus.classList.remove("darkmode-svg")
     }

     return {activeButtonRainIfPress, activeButtonCoffeeIfPress, 
      activeButtonFlorestIfPress, activeButtonFireIfPress, 
      activeDarkModeIfPress, activeLightModeIfPress,
      resetStyleButtons}
}