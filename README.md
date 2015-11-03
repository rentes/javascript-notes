# JavaScript Notes

Welcome to JavaScript Notes: a simple page with notes on the fundamentals
of the JavaScript language.

### Table of Contents
**[Object Creation](#object-creation)**

## Object Creation

The most important data type in JavaScript: the object.

```JavaScript
var car = {
	brand: "Volvo",  // Properties listing
	model: "XC 90",
	used: false
};
```

We can also instantiate an object through a constructor function:

```JavaScript
function Car(brand, model, used) {
	this.brand = brand;
	this.model = model;
	this.used = used;
};

// Notice the "new" keyword to create object instances
var another_car = new Car("Volvo", "XC 90", false);

```
