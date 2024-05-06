console.log("*******************\n* Nullable Types *\n*******************");
var studentName = "Tehreem";
console.log(studentName);
var fun = function (name, password) {
    if (password !== undefined && password !== null) {
        return " Name : ".concat(name, " , password : ").concat(password);
    }
    else {
        return "Name : ".concat(name);
    }
};
console.log(fun("Arham", undefined));
