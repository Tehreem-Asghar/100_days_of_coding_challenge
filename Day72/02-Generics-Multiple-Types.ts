/***************************
 * GENERICS MULTIPLE TYPES *
 ***************************/

function value<T>(val: T): T {
    return val;
  }
  
  console.log(value<number>(100)); // Returns: 100 (number)
  console.log(value<string>("Tehreem")); // Returns: "Tehreem" (string)
  
  // Arrow Function with Generics `returnTypeArrowSyntax`
  const TypeArrowSyntax = <T>(val: T): T => val;
  
  console.log(TypeArrowSyntax<number>(50)); // Returns: 50(number)
  console.log(TypeArrowSyntax<string>("Ayesha")); // Returns: "Ayesha" (string)
  
  // Generic Function `testType`
  function testType<T>(val: T): string {
    return `The Value Is ${val} And Type Is ${typeof val}`;
  }
  
  console.log(testType<number>(100));
  // Returns: "The Value Is 100 And Type Is number"
  
  console.log(testType<string>("Tehreem"));
  // Returns: "The Value Is Tehreem And Type Is string"
  
  // Generic Function `multipleTypes`
  function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
  }
  
  console.log(multipleTypes<string, number>("Arham", 100));
  // Returns: "The First Value Is Arham And Second Value 100"
  
  console.log(multipleTypes<string, boolean>("Sarim", true));
  // Returns: "The First Value Is Sarim And Second Value true"