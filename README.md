<a name="README">[<img src="img/JS.png" width="200px" height="200px" />](https://github.com/rentes/javascript-notes)</a>

# JavaScript Notes

Welcome to JavaScript Notes: a simple page with notes on the fundamentals
of the JavaScript programming language. Code straight-to-the-point.

### Table of Contents
**1. [Object Creation](#object-creation)**<br/>
**2. [Scope](#scope)**<br/>
**2.1. [Global Scope](#global-scope)**

## 1. Object Creation<a name="object-creation"></a>

The most important data type in JavaScript: the object.

To instantiate an object create a variable and describe its properties:

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

## 2. Scope<a name="scope"></a>

Scope is the visibility of variables.

### 2.1. Global Scope<a name="global-scope"></a>

```JavaScript
var globalVariable = 1;

function f() {
	// we can access globalVariable in this function's scope
	console.log(globalVariable);
}
```