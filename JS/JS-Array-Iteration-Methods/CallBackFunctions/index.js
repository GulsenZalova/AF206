// High Order Functions

function calc(num1,num2,callback){

   return  callback(num1,num2)
}


// CallBack Functions

function  sum(num1,num2){
    let add = num1+num2
    return add
}


function cixma(num1,num2){
    let res=num1-num2
    return res
}


console.log(calc(10,15,sum))
console.log(calc(10,15,cixma))
