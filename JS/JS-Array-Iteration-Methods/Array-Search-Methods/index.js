let nums=[10,20,45,35,90,60,80]



// let finded=nums.find((value,index,arr)=>{
//     return   value < 0
// })

// let finded=nums.find((value,index,arr)=> value < 50)
// console.log(finded)

// let finded= nums.find(ElementFind)



let findedIndex= nums.findIndex(value=>value==90)
console.log(findedIndex)

console.log(nums.slice(findedIndex))

console.log(nums)
// function ElementFind(value,index,arr){
//     return value > 45
// }



