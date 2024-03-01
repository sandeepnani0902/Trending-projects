 
  let button = document.getElementById("btn")

button.addEventListener("click", myfunc);
function myfunc(){
    const  input_box = document.getElementById("search-box")
    const list = document.getElementById("list-box")

if(input_box.value == 0){
    alert("please enter your task")
}
else{
    let new_list = document.createElement("li")
    
     new_list.innerHTML =input_box.value 
     list.appendChild(new_list)
    
    let del = document.createElement("button")
    del.innerHTML ="DEL"
    new_list.appendChild(del)

     input_box.value = ''
    del.addEventListener("click", delfunction);
    function delfunction(){
        new_list.remove() =' '
        


    }
    let edit =document.createElement("button")
    edit.innerHTML ="edit"
    new_list.appendChild(edit) 
    edit.addEventListener("click",editfunction);
    function editfunction(){
        del.remove()
        edit.remove()
        input_box.value =new_list.innerHTML
        new_list.remove() =''
       
    }

}  

}





 