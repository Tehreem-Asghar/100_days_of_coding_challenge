// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() 
//that logs a sentence about the laptop.Explain & TIP: Objects can also contain functions (methods)
// that can perform actions using the object's properties. This introduces method definition within objects.

let laptop={
    make : 'dell',
    model: 'XPS 15',
    year : 2022,
    describe (){
 console.log(`This laptop is a  make: ${this.make}  model is: ${this.model}
  and year: ${this.year}`);
    }
}

laptop.describe();