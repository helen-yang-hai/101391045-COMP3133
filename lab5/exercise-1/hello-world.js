// var greeter = function (name) {
//     console.log('Hello ' + name);
// }
// greeter('John Smith')
//using TypeScript ES6 features
var greeter = function (firstName, lastName) {
    console.log("Hello ".concat(firstName, " ").concat(lastName));
};
greeter("John", "Smith");
