console.log(`****************
* VOID & NEVER *
****************`);

console.log(`\n.........void.........`);

function Name(name :string) :void {
    console.log(name);
}
Name('Tehreem');

console.log(`\n ..........never..........`);

function message(message: string): never {
    throw new Error(message);
  }

message(' I like Coding');

