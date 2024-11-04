

let nums=[1,23,46,-19,90,128,0,-10,9000]

// max 128
// min -19



function FindMax(arr){
    let max=0
    // 9000
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}


function FindMin(arr){
    let max=FindMax(arr)
    let min=max
    //-19
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i]
        }
    }
    return min
}

// console.log(FindMax(nums))

console.log(FindMin(nums))


