/***************************
 * CLASS ACCESS MODIFIERS: *
 ***************************/

// 1) Public

class Public_modifier {
  public id: number;
  public name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
let public_Modifier = new Public_modifier(43547, "Tehreem");
console.log(public_Modifier);

console.log(public_Modifier.id); // Accessing the public property

// 2) private

class Private_modifier {
  private id: number;
  private name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  privateProperty() {
    console.log(this.id); // private property accessable in class method but not accessable out of class.
    console.log(this.name);
  }
}

let private_modifier = new Private_modifier(123456, "Arham");
console.log(private_modifier);
// private_modifier.id // This would result in an error because id property is private
private_modifier.privateProperty(); // this is a valid way to access private property

// 3) Protected

class protected_Parent {
  protected id: number;
  constructor(id: number) {
    this.id = id;
  }
}
class Protected_child extends protected_Parent {
  ID() {
    console.log(this.id);
  }
}
let protected_parent = new protected_Parent(123345);
// protected_parent.id // This would result in an error because id is protected

let protected_child = new Protected_child(246679);
protected_child.ID(); // This is a valid way to access the protected property