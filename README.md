<a name="README">[<img src="img/JS.png" width="200px" height="200px" />](https://github.com/rentes/javascript-notes)</a>

# JavaScript Notes

Welcome to JavaScript Notes: a simple page with notes on the fundamentals
of the JavaScript programming language. Code straight-to-the-point.

### Table of Contents
**[1. Object Creation](#object-creation)**<br/>
**[2. Scope](#scope)**<br/>
**[2.1. Global Scope](#global-scope)**<br/>
**[2.2. Local Scope](#local-scope)**<br/>
**[2.3. Function Scope](#function-scope)**

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
};

f();
```

### 2.2. Local Scope<a name="local-scope"></a>

```JavaScript
var variable = 1;

function g() {
	// we can access the global variable in this function's scope
	console.log(variable);
};

function h() {
	// local variable (a new one different from the global one)
	var variable = 2;
	console.log(variable);
};

g();
h();
```

### 2.3. Function Scope<a name="function-scope"></a>

```JavaScript
var variable = 1;

function i() {
	// local variable (a new one different from the global one)
	var variable = 2;
	console.log(variable);
};

i();
```