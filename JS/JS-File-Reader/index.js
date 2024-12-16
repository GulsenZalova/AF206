let form=document.querySelector("form")
let imageInp=document.querySelector(".image")
let row=document.querySelector(".row")
let images= JSON.parse(localStorage.getItem("image")) || []
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let myFile=imageInp.files[0]
   
   console.log(myFile)

if(myFile.type.includes("image")){
         let reader = new FileReader()
    // oxunma methodu
   reader.readAsDataURL(myFile)
   reader.onload=function(){
      let imgeSrc= reader.result
      row.innerHTML+=`
      <div class="col">
            <div class="card" style="width: 18rem;">
                <img src=${imgeSrc} class="card-img-top" alt="...">
              </div>
          </div>
      `
      images.push(reader.result)
      localStorage.setItem("image",JSON.stringify(images))
   }


}else{                                 
    alert("Seçtiyiniz format yalnisdir")
}



})