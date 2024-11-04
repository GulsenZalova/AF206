// Fuctional Constructor
// function Human(name,age){
//     this.name=name,
//     this.age=age
// }

// function Student(name,age,lesson){
//     Human.call(this,name,age)
//     this.lesson=lesson
// }


// let student = new Student("Fidan",18,"html")
// console.log(student)


// Class Constructor


class Human {
    constructor(name, surname, age) {
        
        if (typeof name !== "string"|| name.length == 0) {
            throw new Error("Invalid name")
        }

        if(age<0){
            throw new Error("Invalid age")
        }


        this.name = name,
        this.surname = surname,
        this.age = age
    }



    // methods
    adiniQisaSekildeDe() {
        return `${this.name[0]}.${this.surname}`
    }


    fullInformation() {
        return `Menim adim ${this.name}-dir.${this.age} yasim var`
    }


    calculateProfit(){
        let profit= (this.satis-this.maya)*this.count
    }
}



class Student extends Human {
    constructor(name, surname, age, lesson) {
        super(name, surname, age)
        this.lesson = lesson
    }

    // methods
    adiniQisaSekildeDe() {
        return `${this.name}.${this.surname}`
    }

}

try {
    let student = new Student("Fidan", "Aliyeva", 10, "html")
    // console.log(student)

    console.log(typeof student.name)
    console.log(student.adiniQisaSekildeDe())
    console.log(student.fullInformation())
} catch (err) {
    console.log(err)
}





console.log(typeof 10)
console.log(String(5))
