//Basic 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
var Person = /** @class */ (function () {
    function Person(fName, lName, age, jobTitle) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.printString = function () {
        return "Hello there, My name is ".concat(this.fName, " ").concat(this.lName, ", I am ").concat(this.age, " years old, and I am a ").concat(this.jobTitle);
    };
    return Person;
}());
var person1 = new Person("Brad", "Pitt", 59, "actor");
console.log(person1.printString());
//Basic 2
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
var Actor = /** @class */ (function (_super) {
    __extends(Actor, _super);
    function Actor(fName, lName, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, fName, lName, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Actor.prototype.printAdditionalInfo = function () {
        return "".concat(_super.prototype.printString.call(this), " and I get ").concat(this.salary, " every month, and I work in ").concat(this.jobLocation); //this.printString
    };
    return Actor;
}(Person));
var actor1 = new Actor("Kate", "Hudson", 43, "actor", 500000, "Los Angeles");
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
