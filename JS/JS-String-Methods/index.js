// length
let str = "loremipsum"


console.log(str[str.length - 1])

// charAt

console.log(str[-1])
console.log(str.charAt(-1))
// boş string qaytarır mənfi index versək

// charCodeAt

console.log(str.charCodeAt(0))



// at 

console.log(str.at(-2))


// slice


console.log(str.slice(-2, -5))
// iki menfi verdikde boş string


console.log(str.slice(-7))



// substring


console.log(str.substring(-2, -5))

// tek bir menfi verdikde wmumi stringi qatrarir
//  iki tek index verende boş string qaytarir



console.log(str.substr(1, 4))



// let lang = prompt("istediyiniz dili secin").toLocaleLowerCase().trim()



// switch (lang) {
//     case "javascript":
//         console.log("JS")
//         break;
//     case "phyton":
//         console.log("PY")
//         break;
//     case "c#":
//         console.log("C#")
//         break;
//     default:
//         console.log("duzgun dil axtarmirsiz")
//         break;
// }


// concat

let str1="Hello"
let str2="World"


console.log(str1+" "+str2)

console.log(str1.concat(" ",str2))



// trim


console.log(str.length)


console.log(str.trim().length)



// replace

console.log(str.replace("m","k"))


// replaceAll

console.log(str.replaceAll("m","k"))


let letter="L"



function findLetter(word,char){
    for(let i=word.length-1;i>=0;i--){
        console.log(word[i].toLocaleUpperCase())
        if(word[i].toLocaleUpperCase()==char){
             
             return i
         
        }
    }
    return -1
}


let finded= findLetter(str,letter)

console.log(finded)



console.log(str.toLocaleUpperCase().indexOf("L"))




// includes



console.log(str.includes("l"))



// match



console.log(str.matchAll("m"))