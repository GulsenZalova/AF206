let guessForm=document.querySelector(".guess-form")
let input = document.querySelector("input")
let alert=document.querySelector(".alert-danger")
let alertSuccess=document.querySelector(".alert-success")
let myNumber=document.querySelector(".mynumber")
let randomNumber=document.querySelector(".random")

// guessForm.addEventListener("submit",(e)=>{
//     e.preventDefault()
    //  let random= Math.floor(Math.random() * 15) + 1 
//      let mynumber=input.value
//      console.log(random)
//      if((input.value.trim()!=="")){
//          if(mynumber>0 && mynumber<=15){
                 
//                 myNumber.textContent= mynumber
//                 randomNumber.textContent= random
//                 if(mynumber==random){
//                     alertSuccess.classList.replace("d-none","d-block")
//                     alertSuccess.textContent="Qalibsen"
//                     setTimeout(()=>{
//                         alertSuccess.classList.replace("d-block","d-none")
//                     },2000)



//                     Success("Qalibsen")
//                 }else if(mynumber>random){
//                     alertSuccess.classList.replace("d-none","d-block")
//                     alertSuccess.textContent="Boyukdur"
//                     setTimeout(()=>{
//                         alertSuccess.classList.replace("d-block","d-none")
//                     },2000)
//                     Success("Boyukdur")
//                 }else{
//                     alertSuccess.classList.replace("d-none","d-block")
//                     alertSuccess.textContent="Kicikdir"
//                     setTimeout(()=>{
//                         alertSuccess.classList.replace("d-block","d-none")
//                     },2000)

//                     Success("Kicikdir")
//                 }
              
//          }else{
//             // 1-15 arasinda deyil
//             alert.classList.replace("d-none","d-block")
//             alert.textContent="1-15 arasinda reqem daxil elemelisen"
//             setTimeout(()=>{
//              alert.classList.replace("d-block","d-none")
//             },2000)

//             Danger("1-15 arasinda reqem daxil elemelisen")
//          }
//      }else{
//         // Bos olanda islesin
//        alert.classList.replace("d-none","d-block")
//        alert.textContent="Boş value daxil edə bilmərsən"
//        setTimeout(()=>{
//         alert.classList.replace("d-block","d-none")
//        },2000)
//      }
//     Danger("Boş value daxil edə bilmərsən")
//      input.value=" "
//      }
// })

// DRY 





// function Danger(messagge){
//     alert.classList.replace("d-none","d-block")
//     alert.textContent=messagge
//     setTimeout(()=>{
//      alert.classList.replace("d-block","d-none")
//     },2000)
// }










// input.addEventListener("keyup",(e)=>{
//     console.log(e.target.value)
// })






guessForm.addEventListener("submit",(e)=>{
    e.preventDefault()
     let random= Math.floor(Math.random() * 15) + 1 
     let mynumber=input.value
     console.log(random)
     if((input.value.trim()!=="")){
         if(mynumber>0 && mynumber<=15){


                 
                myNumber.textContent= mynumber
                randomNumber.textContent= random


                if(mynumber==random){
                    Success(alertSuccess,"Qalibsen")
                }else if(mynumber>random){
                    Success(alertSuccess,"Boyukdur")
                }else{
                    Success(alertSuccess,"Kicikdir")
                }
              
         }else{
            Success(alert,"1-15 arasinda reqem daxil elemelisen")
         }
     }else{
    Success(alert,"Boş value daxil edə bilmərsən")
     input.value=" "
     }
})


function Success(alertElement,messagge){
    alertElement.classList.replace("d-none","d-block")
    alertElement.textContent=messagge
    // setTimeout(()=>{
    //     alertElement.classList.replace("d-block","d-none")
    // },2000)
}




let random= Math.floor(Math.random() * 15 + 1)


console.log(random)