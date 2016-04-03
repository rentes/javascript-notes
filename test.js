/*
 * local scope example
 */
var globalVariable = 1;

function f() {
	// we can access globalVariable in this function's scope
	console.log(globalVariable);
};

f();

/*
 * global scope example
 */

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

/*
 * function scope example
 */

 var variable = 1;

function i() {
    // local variable (a new one different from the global one)
    var variable = 2;
    console.log(variable);
};

i();