# JavaScript Notes
## Object Creation

```JavaScript
// The most important data type in JavaScript: the object
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
var car = new Car("Volvo", "XC 90", false);

```
