/************************
 * CLASS STATIC MEMBERS *
 ************************/

class MathOperations {
  public static pi: number = Math.PI;

  public static add(num1: number, num2: number) {
    console.log(num1 + num2);
  }
  public static subs(num1: number, num2: number) {
    console.log(num1 - num2);
  }
}
// we can access property without instance object
console.log(MathOperations.pi);// output : 3.141
MathOperations.add(10, 15);// output : 25
MathOperations.subs(15, 10);// output : 5
