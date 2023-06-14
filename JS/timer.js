let Timerout

export default function Timer ({
    secondsDisplay,
    minutesDisplay,
    
}){

    function stop(){
        clearTimeout(Timerout)
    }

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

        function PlusFiveMinutesInTimer (){
            minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "00")
        }

        function MinusFiveMinutesInTimer (){
            minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "00")

            if(minutesDisplay.textContent <= 0){
                minutesDisplay.textContent = "00"
            }    
        }
    

    return {coutdown, stop, PlusFiveMinutesInTimer, MinusFiveMinutesInTimer}
}