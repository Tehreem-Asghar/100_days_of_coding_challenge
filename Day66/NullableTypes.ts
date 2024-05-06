console.log(`*******************
* Nullable Types *
*******************`);

let studentName: string | null | undefined = "Tehreem";
console.log(studentName);

let fun = (name: string, password: string | number | undefined | null) => {
  if (password !== undefined && password !== null) {
    return ` Name : ${name} , password : ${password}`;
  } else {
    return `Name : ${name}`;
  }
};
console.log(fun("Arham", undefined));
