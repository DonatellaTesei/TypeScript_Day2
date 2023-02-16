//Basic 1

// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”

class Person {
    fName: string;
    lName: string;
    age: number;
    jobTitle: string;
    constructor(fName:string, lName:string, age:number, jobTitle:string){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
printString(): string {
    return`Hello there, My name is ${this.fName} ${this.lName}, I am ${this.age} years old, and I am a ${this.jobTitle}`;
   
}
}

const person1 = new Person ("Brad", "Pitt", 59, "actor");
console.log(person1.printString());


//Basic 2

// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”

class Actor extends Person{
    salary: number;
    jobLocation: string;
    constructor(fName:string, lName:string, age:number, jobTitle:string, salary:number, jobLocation:string){
        super(fName,lName, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
  
printAdditionalInfo(): string {
return `${super.printString()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`; //this.printString
    }
}
const actor1 = new Actor ("Kate", "Hudson", 43, "actor", 500000, "Los Angeles");
console.log(actor1.printAdditionalInfo());


//Day 2 | Classwork | Advanced
//Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

//Create a Parent Class called Vehicles

// interface IVehicles{
//     ID:string;
//     Model: string;
//     prodYear: number;
//     color?: string;
// }

// class Vehicles implements IVehicles{
//     protected ID:number;
//     Model: string;
//     kilomLeft: number;
//     seatsNum: number;
//     fuelType: string;
//     prodYear: number;
//     depositLocation: string = "Vienna Heiligenstadt";
//     constructor(ID:number, Model:string,  kilomLeft:number, seatsNum: number,fuelType: string,  prodYear: number,  depositLocation: string,
//   ){
//         this.ID = ID;
//         this.Model = Model;
//         this.kilomLeft= kilomLeft;
//         this.seatsNum = seatsNum;
//         this.fuelType = fuelType;
//         this.prodYear = prodYear;
//         this.depositLocation = depositLocation;
//   }
//   printInfo(): string {
//     return`Car ID: ${this.ID}, Model: ${this.Model}, Kilometers left: ${ this.kilomLeft}, Number of seats: ${this.seatsNum}, Fuel type:${ this.fuelType}, Year of production: ${this.prodYear}, Location: ${this.depositLocation}`;
// }
// }
// const vehicle1 = new Vehicles (1, "Lamborghini Aventador ", 100, 2, "bio-diesel", 2015, "");
// const vehicle2 = new Vehicles (2, "Fiat 500 ", 200, 5, "bio-diesel", 2017, "");
// // console.log(vehicle1.printInfo());

// class Motorbikes extends Vehicles{
//     weight: number;
//     jobLocation: string;
//     constructor(ID:number, Model:string,  kilomLeft:number, seatsNum: number,fuelType: string,  prodYear: number,  depositLocation: string, weight: number, 
//         ){
//         super(ID, Model, kilomLeft, seatsNum, fuelType, prodYear,depositLocation);
       
//         this.jobLocation = jobLocation;
//         this.weight = weight;
//     }
  
// printAdditionalInfo(): string {
// return `${super.printString()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`; //this.printString
//     }
// }
// const  = new Actor ("Kate", "Hudson", 43, "actor", 500000, "Los Angeles");
// console.log(actor1.printAdditionalInfo());
