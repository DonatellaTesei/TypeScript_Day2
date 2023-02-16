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

interface IVehicles{
  
    Model: string;
    prodYear: number;
    color?: string;
}
let cars : any = [];
class Vehicles implements IVehicles{
    protected ID:number;
    Model: string;
    mileage: number;
    seatsNum: number;
    fuelType: string;
    prodYear: number;
    depositLocation: string = "Vienna Heiligenstadt";
    image: string;
    constructor(ID:number, Model:string,  mileage:number, seatsNum: number,fuelType: string,  prodYear: number, image: string
  ){
        this.ID = ID;
        this.Model = Model;
        this.mileage= mileage;
        this.seatsNum = seatsNum;
        this.fuelType = fuelType;
        this.prodYear = prodYear;
        this.image = image;
        cars.push(this)
        
  }
  printInfo(): string {
    return `
    <div class="card" shadow p-3 mb-5 bg-body-tertiary rounded h-90" style="width: 22rem;">
  <img src="${this.image}" class="img-thumbnail mt-2" alt="${this.Model}">
  <div class="card-body">
    <h5 class="card-title text-center Model">${this.Model}</h5>
    <p class="card-text id"><b>Vehicle ID:</b> ${this.ID}</p>
    <p class="kilometers"><b> Mileage:</b> ${this.mileage}</p>
    <p class="seats"> <b>Number of seats:</b> ${this.seatsNum}</p>
    <p class="fuel"><b>Fuel type:</b>${this.fuelType}</p>
    <p class="year"><b>Year of production:</b> ${this.prodYear}</p>
    <p class="location"><b> Location: </b>${this.depositLocation}</p>
    <p class="vehPrice">&nbsp;</p>
    <a href="#" class="btn btn-primary price">Show price</a>
  </div>
</div>`;
    
}
vehiclePrice(): string{
    return `${500000/this.mileage}`;
}
}
// here we create our cars
    new Vehicles (1, "Lamborghini Aventador ", 100, 2, "bio-diesel", 2015, "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/aventador/s/ar_aven_s.png"),
    new Vehicles (1, "Lamborghini Aventador ", 100, 2, "bio-diesel", 2015, "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/aventador/s/ar_aven_s.png"),
    new Vehicles (2, "Fiat 500", 200, 5, "bdiesel", 2017, "https://www.fiat.at/content/dam/fiat/com/my23/500-500c/colorizer/500/red/500-figurini-colorizer-Passion-Red-desktop-680x430.png"),
    new Vehicles (3, "Tesla X", 150, 5, "electric", 2018, "https://cdn.motor1.com/images/mgl/WgXQ1/s1/das-suv-aus-der-zukunft.jpg"),
    new Vehicles (4, "Aston Martn DB11", 300, 2, "gasoline", 2020, "https://imgr1.auto-motor-und-sport.de/ASTON-MARTIN-DB11-V8-SHADOW-EDITION-react169Big-79e28615-1668634.jpg"),
    new Vehicles (5, "Ferrari Roma", 50, 2, "gasoline", 2021, "https://i.auto-bild.de/ir_img/2/4/5/1/1/3/3/5f2947aad5b9d938.jpg")
    new Vehicles (5, "Ferrari Roma", 50, 2, "gasoline", 2021, "https://i.auto-bild.de/ir_img/2/4/5/1/1/3/3/5f2947aad5b9d938.jpg")


// let vehicle1 = new Vehicles (1, "Lamborghini Aventador ", 100, 2, "bio-diesel", 2015, "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/aventador/s/ar_aven_s.png");
// vehicle.innerHTML += vehicle1.printInfo();


// let vehicle2 = new Vehicles (2, "Fiat 500", 200, 5, "bdiesel", 2017, "https://www.fiat.at/content/dam/fiat/com/my23/500-500c/colorizer/500/red/500-figurini-colorizer-Passion-Red-desktop-680x430.png");
// vehicle.innerHTML += vehicle2.printInfo();

// let vehicle3 = new Vehicles (3, "Tesla X", 150, 5, "electric", 2018, "https://cdn.motor1.com/images/mgl/WgXQ1/s1/das-suv-aus-der-zukunft.jpg");
// vehicle.innerHTML += vehicle3.printInfo();

// let vehicle4 = new Vehicles (4, "Aston Martn DB11", 300, 2, "gasoline", 2020, "https://imgr1.auto-motor-und-sport.de/ASTON-MARTIN-DB11-V8-SHADOW-EDITION-react169Big-79e28615-1668634.jpg");
// vehicle.innerHTML += vehicle4.printInfo();

// let vehicle5 = new Vehicles (5, "Ferrari Roma", 50, 2, "gasoline", 2021, "https://i.auto-bild.de/ir_img/2/4/5/1/1/3/3/5f2947aad5b9d938.jpg");
// vehicle.innerHTML += vehicle5.printInfo();
// console.log(vehicle1.printInfo());
let vehicle = document.getElementById("result") as HTMLElement 

for(let val of cars){
    vehicle.innerHTML += val.printInfo();
}


class Motorbikes extends Vehicles{
    weight: number;

    constructor(ID:number, Model:string,  mileage:number, seatsNum: number, fuelType: string,  prodYear: number,  depositLocation: string, image: string, weight: number, 
        ){
        super(ID, Model, mileage, seatsNum, fuelType, prodYear, image);
        this.weight = weight;
    }
  
printAdditionalInfo(): string {
return `${super.printInfo()}, weight: ${this.weight}`; //
    }
}
let motorbike1 = new Motorbikes (3, "Aprilia", 50, 1, "gasoline", 2010, "", "", 20);
console.log(motorbike1.printAdditionalInfo());

class Trucks extends Vehicles{
    weight: number;
    cabinSize: number;

    constructor(ID:number, Model:string,  mileage:number, seatsNum: number,fuelType: string,  prodYear: number,  depositLocation: string, image: string, weight: number, cabinSize: number,
        ){
        super(ID, Model, mileage, seatsNum, fuelType, prodYear, image);
        this.weight = weight;
        this.cabinSize = cabinSize;
    }
  
printAdditionalInfo2(): string {
return `${super.printInfo()}, weight: ${this.weight}, cabinSize:${this.cabinSize}`; //
    }
}
let truck1 = new Trucks (3, "Aprilia", 50, 1, "gasoline", 2010, "", "", 20, 50);
console.log(truck1.printAdditionalInfo2());



let btns = document.getElementsByClassName("price") as HTMLCollection; //button
let par = document.getElementsByClassName("vehPrice") as HTMLCollection; //paragraph
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
par[i].innerHTML = cars[i].vehiclePrice();
    })
}
    // document.getElementsByClassName("vehPrice")[i].innerHTML = 
    