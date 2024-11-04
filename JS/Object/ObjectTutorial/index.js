

let student={
    name:"Ayan",
    surname:"Axundova",
    age:19,
    group:"AF206",
    lessons:["html","css","js"],
    address:{
        city:"Baki",
        country:"Azerbaijan"
    },
    birthYear:2005,
    isStudent:true,
    getFullname:function(){
        return  
    },
    calcAge: function(){
        return 2024-this.birthYear
    }
}

// student1.lessons.forEach(x=>console.log(x))

// console.log(student1.getFullname())
// console.log(student1.calcAge())


// let student2={
//     name:"Serqiye",
//     surname:"Axundova",
//     age:18,
//     group:"AF206",
//     birthYear:2006,
//     isStudent:true,
//     getFullname:function(){
//         return  
//     },
//     calcAge: function(){
//         return 2024-this.birthYear
//     }
// }



// let student3=create("Rauf","Abbasov",20)

// Factory Fuctions

function GenerateStudent(name,surnme,age,group,birthYear,isStudent){
    return {
        name,
        surnme,
        age,
        group,
        birthYear,
        isStudent
    }
}

// let student1=GenerateStudent("Rauf","Abbasov",20,"AF206",2005,true)
// let student2=(GenerateStudent("Senan","Eliyev",20,"AF206",2005,true))

// student1.prototype.getFullName=function(){
//     return `${this}`
// }

// let AF206=[student1,student2]


// console.log(student1.getFullName())


function Human(name,surname,age){
    this.name=name,
    this.surname=surname,
    this.age=age
}


function  Student(name,surname,age,group,isStudent){
    Human.call(this,name,surname,age)
    this.group=group,
    this.isStudent=isStudent
}


Object.setPrototypeOf(Student.prototype,Human.prototype)

let student1 = new Student("Rauf","Abbasov",20,"AF206",true)
let student2= new Student("Rauf","Abbasov",20,"AF206",true)
let student3 = new Student("Rauf","Abbasov",20,"AF206",true)

let students=[]
students.push(student1,student2,student3)

console.log(students)


// Object.keys
// Object.values
// Object.entries



// console.log(Object.keys(student1))
// console.log(Object.values(student1))
// console.log(Object.entries(student1))





// let nums=[10,20,30,40,50]


// let sum=nums.reduce((total,value)=>{
//     return total+value
// },0)

// console.log(sum)