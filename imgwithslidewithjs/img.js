


const phones =["i1.jpg","i2.jpg","i3.jpg","i5.jpg"]


const container =document.getElementById("img1")
const left_btn = document.querySelector(".fa-caret-left")
const right_btn = document.querySelector(".fa-caret-right")

let  count =0

function myfunc(){
    container.src =phones[count]
}  

left_btn.addEventListener("click",()=>{
      count =(count-1 +phones.length)%phones.length
      myfunc()
})
right_btn.addEventListener("click",()=>{
    count =(count+1 +phones.length)%phones.length
    myfunc()
})
