// forEach

let nums=[10,20,40,30,90,60,80]

let values=nums.forEach((value,index,arr)=>{
//    return value
// console.log(value)
})

// console.log(values)

// map


// let newArr= nums.map(value=>{
//    return value+=5
// })
// let newArr= nums.map(value=>value)

// console.log(newArr)



// let newArr=nums.filter(value=> value<0 && value>200)
// console.log(nums)
// console.log(newArr)




// let sum= nums.reduce((total,value)=>{
//     return total+value
// })


// console.log(sum)





// let result= nums.some(x=>x%10==0)
// console.log(result)



let result= nums.every(x=>x%10==0)
console.log(result)