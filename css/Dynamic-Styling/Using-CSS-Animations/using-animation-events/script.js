(function(){

    var element  = document.getElementById('watchme');
    element.addEventListener("animationstart", listener, false);
    element.addEventListener("animationend", listener, false);
    element.addEventListener("animationiteration", listener, false);
    element.addEventListener("click", addSlideInClass, false);
    // element.className = "slidein";
    
    function addSlideInClass(){

        this.className = "slidein";
    }

    function listener(event){
        var li = document.createElement("li");
        switch(event.type){
            case "animationstart":
                li.innerHTML = "Started: elapsed time is: " + event.elapsedTime;
                break;
                //end case "animationstart"
            case "animationend": 
                li.innerHTML = "Ended: elapsed time is " + event.elapsedTime;
                break;
                //end case "animationstart"
            case "animationiteration" :
                li.innerHTML = "New loop started at time " + event.elapsedTime;
                break;
                //end case "animationIteration"
        }
        document.getElementById("output").appendChild(li);
    }
})();













