// Selecting Elements


// ID
// let head=document.getElementById("head")
// console.log(head)

// TagName

// let heads=document.getElementsByTagName("h1")
// console.log(heads)


// let result=Array.from(heads)

// console.log(result)
// // html colloction esl array deyil
// result.forEach(element => {
//     // console.log(element)
// });



// ClassName

// let parags=document.getElementsByClassName("parag")

// console.log(parags)




// queryselector



// let head=document.querySelector("#heading")
// console.log(head)


// let parag=document.querySelector(".parag")
// console.log(parag)


// let h1=document.querySelector("h1")
// console.log(h1)


// queryselectorAll




// let parags=document.querySelectorAll(".parag")

// console.log(parags.length)



// parags.forEach(parag=>{
//     console.log(parag)
// })





// Traversing Elements




// let boxes=document.querySelector(".boxes")
// let box=document.querySelector(".box")


// let parent=box.parentElement.parentElement.parentElement.parentElement

// let parent=box.closest(".boxes")


// let next=box.nextElementSibling.nextElementSibling.nextElementSibling
// let prev=box.previousElementSibling

// console.log(parent)


// console.log(next)
// console.log(prev)



// parentElement
// nextElementSibling
// previousElementSibling


// let parent=box.parentNode

// console.log(parent)




// let li=document.querySelectorAll("li")

// li.forEach(x=>{
//     console.log(x.parentNode)
// })



// Manuplating Elements


// innerHTML,innerText,textContent

// let myList=document.createElement("ul")
// let body=document.body

// // myList.textContent="Hello World"
// myList.innerText="<li>Salam</li>"



// //  myList.innerHTML="<b>Salam</b>"

// body.prepend(myList)
// console.log(myList)



// let name=prompt("adinizi yazin")
// let li=document.createElement("li")
// li.textContent=name
// li.className="item"



// let ul=document.createElement("ul")
// ul.className="list"
// ul.appendChild(li)

// let container=document.createElement("container")
// container.appendChild(ul)

// document.body.appendChild(container)




// let inner=document.createElement("div")
// inner.className="innerBox"
// inner.style.width="200px"
// inner.style.height="200px"
// inner.style.backgroundColor="aqua"
// inner.style.display="flex"
// inner.style.flexDirection="column"



// let h1=document.createElement("h1")
// h1.className="head"
// h1.textContent="Salam"

// let span=document.createElement("span")
// span.innerText="Lorem"
// span.className="parag"



// let box=document.createElement("div")
// box.className="box"


// let button=document.createElement("button")
// button.className="btn"
// button.innerText="Go"



// let img=document.createElement("img")
// img.setAttribute("src","https://learnbatta.com/assets/images/javascript/javascript-logo.png")
// img.setAttribute("alt","javascript dersi")



// let a=document.createElement("a")
// a.setAttribute("href","https://www.javascripttutorial.net/javascript-dom/")
// a.setAttribute("target","_blank")
// a.textContent="Go Javascript"
// box.appendChild(button)
// inner.append(h1,span,box,img,a)

// document.body.appendChild(inner)




// let list=document.querySelector(".list")
// let input=document.querySelector(".todo")
// let btn=document.querySelector(".btn")


// btn.addEventListener("click",function(){
//  if(input.value.trim().length!=0){
//     let newToDo=input.value
//     list.innerHTML+="<li>" + newToDo + "</li>"
//     input.value=""
//  }else{
//     alert("Empty")
//     input.value=""
//  }
// })



let btn=document.querySelector(".btn")
let input=document.querySelector(".todo")
let list=document.querySelector(".list")

btn.addEventListener("click",function(){
    list.style.width="200px"
    list.style.height="200px"
    list.style.backgroundColor="red"
})