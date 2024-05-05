console.log(`\n ********** Anonymous Function *************\n`);

const cook_food = function (item1: string, item2?: string): string {
  if (item2 !== undefined) {
    return ` your ${item1} And ${item2} is ready`;
  } else {
    return ` ${item1}  is ready`;
  }
};
console.log(cook_food("biryani", "kabab")); // use both argument
console.log(cook_food("Sandwich")); // use one argument
