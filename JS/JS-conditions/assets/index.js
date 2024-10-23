
// falsy
// 0, -0 ,null, undifined,nan, "", '',``

// truthy
// menfi ve musbet , dolu string , infinity
let x=100

// if (x<0) {
//    console.log("menfi")
// }
// if(x==0){
//     console.log("sifirdir")
// }
//  else {
//     console.log("musbet")
// }

// if(x>0){
//     if(x%2==0){
//         console.log("edediniz musbet ve cutdur")
//     }else{
//         console.log("edediniz musbet,amma tekdir")
//     }
// }else{
//     console.log("dexgen eded daxil etmemisiz")
// }



// ternary operators
// ? :

// if (x>0) {
//     console.log("musbet")
// } else {
//     console.log("menfi")
// }

// x>0 ? console.log("musbet")  : console.log("menfi")



// if (x<0) {
//    console.log("menfi")
// }
// if(x==0){
//     console.log("sifirdir")
// }
//  else {
//     console.log("musbet")
// }



// x<0
//  ? console.log("menfi") 
//  : x==0 ?  console.log("sifirdir") 
//  : console.log("musbet")



//  && ||


// if (x>0 && x%2==0) {
//     console.log(`${x} ededi musbet ve cutdur`)
// } else {
//     console.log(`${x} ededi musbet, amma tekdir`)
// }


// let name="Gulshan"
// let password=1234
// let name2="Gushan"
// let password2=1234

// if(name==name2 && password==password2){
//     console.log("Welcome")
// }else if(name==name2 || password==password2){
//     console.log("Try Again")
// // }

// let y=1
// switch(y) {
//     case y==1:
//       console.log("Bazarertesi")
//       break;
//     case 2:
//         console.log("CA")
//       break;
//       case 3:
//         console.log("C")
//       break;
//       case 4:
//         console.log("CumaA")
//       break;
//       case 5:
//         console.log("Cume")
//       break;
//       case 6:
//         console.log("Senbe")
//       break;
//       case 7:
//         console.log("Bazar")
//       break;
//       default:
//         console.log("duzgun reqem daxil et")
//   }


//   Task


// let age= Number(prompt("yasinizi daxil edin"))


// if(age>0 && age<125){
//      if(65<=age){
//         console.log("pensiya yasidir")
//      }else{
//         let calc=65-age
//         console.log("sizin pensiya almaginiza " + calc + " qeder iliniz qalib hele")
//         // console.log(`sizin pensiya almaginiza ${calc} qeder iliniz qalib hele`)
//      }
// }else{
//     console.log("duzgun formatta eded daxil etmirsiz")
// }




// let num= Number(prompt("eded daxil edin:"))



// if(num > 0){
//     if(num%3==0 && num%5==0){
//         console.log("bolunur")
//     }else{
//         console.log("bolunmur")
//     }
// }else{
//     console.log("menfidir")
// }



// let a= Number(prompt("a terefini daxil et"))
// let b= Number(prompt("b terefini daxil et"))
// let c= Number(prompt("c terefini daxil et"))

// let a= parseInt(prompt("a terefini daxil et"))
// let b= parseInt(prompt("b terefini daxil et"))
// let c= parseInt(prompt("c terefini daxil et"))

// console.log(a,b,c)

// if(a >0 && b>0 && c>0){
//     if(a==b && a==c && b==c){
//         console.log("beraberterefli")
//     }else if(a==b || a==c || b==c){
//         console.log("beraberyanli")
//     }else{
//         console.log("muxtelifterefli")
//     }
// }
// else{
//     console.log("format sehvdir")
// }


let num1=Number(prompt("birinci eded"))
let num2=Number(prompt("ikinci eded daxil edi"))
let calc=prompt("emeliyyat daxil edin")
let result
switch (calc) {
    case "+":
       result=num1+num2
       console.log(result)
      break;
    case "-":
        result=num1-num2
        console.log(result)
      break;
    case "*":
        result=num1*num2
        console.log(result)
      break;
    case "/":
        result=num1/num2
        console.log(result)
      break;
    default:
        console.log("duzgun emeliyyat daxil et")
  }
