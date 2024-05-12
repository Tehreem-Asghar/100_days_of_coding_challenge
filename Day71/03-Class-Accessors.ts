/*******************
 * CLASS ACCESSORS *
 *******************/

// Getter And Setter

class Account {
  public name: string;
  private _password: string;
  constructor(name: string, private id: number, password: string) {
    this.name = name;
    this._password = password;
  }

  // Getter method
  public getPassword(): string {
    return this._password;
  }

  // Setter method
  public setPassword(password: string) {
    // Validation check for password
    if (password.length >= 6) {
      this._password = password;
    } else {
      console.log("Password must be at least 6 characters long.");
    }
  }
}

let account = new Account("Tehreem", 6790, "abc123");
console.log(account); // output : Account { id: 6790, name: 'Tehreem', _password: 'abc123' }
console.log(account.getPassword()); // output : abc123
account.setPassword("12ab34cd56");
console.log(account.getPassword()); // output : 12ab34cd56

console.log(account); // output : Account { id: 6790, name: 'Tehreem', _password: '12ab34cd56' }
