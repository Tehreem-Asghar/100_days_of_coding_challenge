/*******************
 * TYPE ASSERTIONS *
 *******************/

let value :any = 'tehreem';

console.log((value as string).length);

console.log((<string>value).length)