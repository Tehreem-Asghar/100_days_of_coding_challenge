// Generic Class `User`
var User = /** @class */ (function () {
    function User(value) {
        this.value = value;
    }
    // Method that takes a message of type `T` and displays it along with the `value` property
    User.prototype.show = function (msg) {
        console.log("".concat(msg, " - ").concat(this.value));
    };
    return User;
}());
// Creating an instance of `User` with a specific type parameter (string)
var userOne = new User("Tehreem");
console.log(userOne.value); // Outputs: "Tehreem"
userOne.show("name"); // Outputs: "name - Tehrerem"
// Creating an instance of `User` with a type parameter that can be a number or a string
var userTwo = new User(100);
console.log(userTwo.value); // Outputs: 100
userTwo.show("number"); // Outputs: "number - 100"
