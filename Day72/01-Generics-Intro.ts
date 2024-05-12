
/******************
 * GENERICS INTRO *
 ******************/

function value<T>(item : T) :T{
 return item
}


// Usage of the generic function with different types
let num = value<number>(50)
console.log(num);
let string = value <string>('tehreem')
console.log(string);
let boolean = <boolean> (true)
console.log(boolean);
const arrValue: number[] = value<number[]>([1, 2, 3, 4]);
console.log(arrValue);
