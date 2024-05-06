console.log(`*******************************************
Type Annotations With Multidimensional Arrays
***********************************************`);

let stringType: string[] = ["a", "b", "c", "d"];
console.log('stringType :',stringType);

let numberType: number[] = [1, 2, 3, 4, 5];
console.log('numberType : ',numberType);

let multipuleTypes: (string | number | boolean)[] = [10, false, "Apple", true];
console.log('MultipuleType :',multipuleTypes);
