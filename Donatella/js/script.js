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
var cars = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(ID, Model, mileage, seatsNum, fuelType, prodYear, image) {
        this.depositLocation = "Vienna Heiligenstadt";
        this.ID = ID;
        this.Model = Model;
        this.mileage = mileage;
        this.seatsNum = seatsNum;
        this.fuelType = fuelType;
        this.prodYear = prodYear;
        this.image = image;
        cars.push(this);
    }
    Vehicles.prototype.printInfo = function () {
        return "\n    <div class=\"card\" shadow p-3 mb-5 bg-body-tertiary rounded h-90\" style=\"width: 22rem;\">\n  <img src=\"".concat(this.image, "\" class=\"img-thumbnail mt-2\" alt=\"").concat(this.Model, "\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title text-center Model\">").concat(this.Model, "</h5>\n    <p class=\"card-text id\"><b>Vehicle ID:</b> ").concat(this.ID, "</p>\n    <p class=\"kilometers\"><b> Mileage:</b> ").concat(this.mileage, "</p>\n    <p class=\"seats\"> <b>Number of seats:</b> ").concat(this.seatsNum, "</p>\n    <p class=\"fuel\"><b>Fuel type:</b>").concat(this.fuelType, "</p>\n    <p class=\"year\"><b>Year of production:</b> ").concat(this.prodYear, "</p>\n    <p class=\"location\"><b> Location: </b>").concat(this.depositLocation, "</p>\n    <p class=\"vehPrice\">&nbsp;</p>\n    <a href=\"#\" class=\"btn btn-primary price\">Show price</a>\n  </div>\n</div>");
    };
    Vehicles.prototype.vehiclePrice = function () {
        return "".concat(500000 / this.mileage);
    };
    return Vehicles;
}());
// here we create our cars
new Vehicles(1, "Lamborghini Aventador ", 100, 2, "bio-diesel", 2015, "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/aventador/s/ar_aven_s.png"),
    new Vehicles(1, "Lamborghini Aventador ", 100, 2, "bio-diesel", 2015, "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/aventador/s/ar_aven_s.png"),
    new Vehicles(2, "Fiat 500", 200, 5, "bdiesel", 2017, "https://www.fiat.at/content/dam/fiat/com/my23/500-500c/colorizer/500/red/500-figurini-colorizer-Passion-Red-desktop-680x430.png"),
    new Vehicles(3, "Tesla X", 150, 5, "electric", 2018, "https://cdn.motor1.com/images/mgl/WgXQ1/s1/das-suv-aus-der-zukunft.jpg"),
    new Vehicles(4, "Aston Martn DB11", 300, 2, "gasoline", 2020, "https://imgr1.auto-motor-und-sport.de/ASTON-MARTIN-DB11-V8-SHADOW-EDITION-react169Big-79e28615-1668634.jpg"),
    new Vehicles(5, "Ferrari Roma", 50, 2, "gasoline", 2021, "https://i.auto-bild.de/ir_img/2/4/5/1/1/3/3/5f2947aad5b9d938.jpg");
new Vehicles(5, "Ferrari Roma", 50, 2, "gasoline", 2021, "https://i.auto-bild.de/ir_img/2/4/5/1/1/3/3/5f2947aad5b9d938.jpg");
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
var vehicle = document.getElementById("result");
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var val = cars_1[_i];
    vehicle.innerHTML += val.printInfo();
}
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(ID, Model, mileage, seatsNum, fuelType, prodYear, depositLocation, image, weight) {
        var _this = _super.call(this, ID, Model, mileage, seatsNum, fuelType, prodYear, image) || this;
        _this.weight = weight;
        return _this;
    }
    Motorbikes.prototype.printAdditionalInfo = function () {
        return "".concat(_super.prototype.printInfo.call(this), ", weight: ").concat(this.weight); //
    };
    return Motorbikes;
}(Vehicles));
var motorbike1 = new Motorbikes(3, "Aprilia", 50, 1, "gasoline", 2010, "", "", 20);
console.log(motorbike1.printAdditionalInfo());
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(ID, Model, mileage, seatsNum, fuelType, prodYear, depositLocation, image, weight, cabinSize) {
        var _this = _super.call(this, ID, Model, mileage, seatsNum, fuelType, prodYear, image) || this;
        _this.weight = weight;
        _this.cabinSize = cabinSize;
        return _this;
    }
    Trucks.prototype.printAdditionalInfo2 = function () {
        return "".concat(_super.prototype.printInfo.call(this), ", weight: ").concat(this.weight, ", cabinSize:").concat(this.cabinSize); //
    };
    return Trucks;
}(Vehicles));
var truck1 = new Trucks(3, "Aprilia", 50, 1, "gasoline", 2010, "", "", 20, 50);
console.log(truck1.printAdditionalInfo2());
//price button
var btns = document.getElementsByClassName("price"); //button
var par = document.getElementsByClassName("vehPrice"); //paragraph
var _loop_1 = function (i) {
    btns[i].addEventListener("click", function () {
        par[i].innerHTML = cars[i].vehiclePrice();
    });
};
for (var i = 0; i < btns.length; i++) {
    _loop_1(i);
}
