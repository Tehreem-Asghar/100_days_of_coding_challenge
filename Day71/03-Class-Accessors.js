/*******************
 * CLASS ACCESSORS *
 *******************/
// Getter And Setter
var Account = /** @class */ (function () {
    function Account(name, id, password) {
        this.id = id;
        this.name = name;
        this._password = password;
    }
    // Getter method
    Account.prototype.getPassword = function () {
        return this._password;
    };
    // Setter method
    Account.prototype.setPassword = function (password) {
        // Validation check for password
        if (password.length >= 6) {
            this._password = password;
        }
        else {
            console.log("Password must be at least 6 characters long.");
        }
    };
    return Account;
}());
var account = new Account("Tehreem", 6790, "abc123");
console.log(account);
console.log(account.getPassword());
account.setPassword('12ab34cd56');
console.log(account.getPassword());
console.log(account);
