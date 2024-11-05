// mouse events


// click

let btn=document.querySelector(".btn")


// first hansi event,  o event olduqda hansi funskiya isleyecek

// btn.addEventListener("click", function(){
//     console.log("salam")
// })



// btn.addEventListener("click",SalamVer)



// function SalamVer(){
//     console.log(this)
// }




// btn.addEventListener("click",()=>{
//     console.log("salam")
// })





// let SalamVer=(event)=>{
//     console.log(event.target)
// }


// btn.addEventListener("click",SalamVer)




// arrow functionda hosting yoxdur
// arrow functionlarda this windowu gösterir






// btn.addEventListener("click",SalamVer)



// function SalamVer(event){
//     console.log(event.target)
// }


// btn.addEventListener("contextmenu",()=>{

// })




let box=document.querySelector(".box")


// box.addEventListener("mouseover",()=>{
//     console.log("mouseover")
// })



// box.addEventListener("mouseout",()=>{
//     console.log("mouseover")
// })



// box.addEventListener("mouseup",()=>{
//     console.log("mouseup")
// })



let text=document.querySelector(".text")

box.addEventListener("mousemove",(event)=>{
  

    let R= event.clientX % 255
    let G= event.clientY % 255 
    let B= (event.clientY+event.clientX) % 255
    box.style.backgroundColor= `rgb(${R},${G},${B})`

    text.textContent=`rgb(${R},${G},${B})`
    text.style.color="white"
})