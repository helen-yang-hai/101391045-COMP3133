"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    Customer.prototype.getAge = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName, "'s age is ").concat(this.age));
        return this.age;
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("John", "Smith", 29);
customer.greeter();
customer.getAge();
