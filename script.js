var add = document.querySelector ("#add")
var remove =  document.querySelector("#Remove")
var ish5 =document.querySelector("h5")
var flag = 0;
add.addEventListener("click" , function(e){
if(flag==0){
ish5.innerHTML="friends"
ish5.style.color= "green"
add.innerHTML = "Remove friend" 
flag = 1;
}
else{    ish5.innerHTML="Stranger"
   add.innerHTML="Add Friend"
   ish5.style.color="red"
   flag=0;
}

})


// remove.addEventListener("click" , function(e){
//     add.innerHTML = "Add Friend"
//     ish5.innerHTML = "Stranger"
//     flag=0
// })