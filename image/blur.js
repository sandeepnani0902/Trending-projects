  const  textloading =document.getElementById("textloading")
   const  container =document.querySelector(".bg")

         
  let load =0

  let int=setInterval(blurring,30)

  function blurring(){
    load++ 
    if(load > 99){
        clearInterval(int)
       
    

    }else{
        textloading.innerText =`${load}%` 
         textloading.style.opacity =scale(load,0,100,1,0)
        container.style.filter =  `blur(${scale(load,0,100,30,0)}px)`

    }
    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
  }
    

//   https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers