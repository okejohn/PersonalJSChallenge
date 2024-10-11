// let name2 = "john"

// function multiply(a, b){
//     return a * b
// }

// const newNumber = multiply(5, 6)

// console.log(newNumber)

// let person = {

// firstName : "Ade",
// lastName : "Ajasco",
// fullName(){
//     return this.firstName + " " + this.lastName
// }

// }
// confirm.log(person.fullName())

// Object
// let car = new Object() 
// car.carModel = "500A";
// car.carweigth = 45 ;
// car.drive = function(){
//     return "i am moving"
// }
// console.log(car.drive())

// object contructor

 function Person(firstName, lastName, Age, eyeColor){
    this.fName = firstName,
    this.lName = lastName,
    this.userAge = Age
    this.userEye = eyeColor

}

//object
let myFather = new Person( "John", "Tosin", 20, "Blue")
myFather.nationality = "Nigeria"


console.log(myFather)