//
// JavaScript Notes code
// Created by Miguel Rentes on 2015-11-03.
// This code is free under the MIT license

// Chapter 1. Object Creation

var car = {
    brand: "Volvo",  // Properties listing
    model: "XC 90",
    used: false
};

console.log(car);

function Car(brand, model, used) {
    this.brand = brand;
    this.model = model;
    this.used = used;
};

// Notice the "new" keyword to create object instances
var another_car = new Car("Volvo", "XC 90", false);

console.log(another_car);