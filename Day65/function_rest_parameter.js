console.log("***********REST PARAMETER************\t");
function restParameter() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers;
}
console.log(restParameter(1, 2, 3, 3));
// with another logic
function rest() {
    var addNum = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        addNum[_i] = arguments[_i];
    }
    var add = 0;
    for (var i = 0; i < addNum.length; i++) {
        add += addNum[i];
    }
    return "add : ".concat(add);
}
console.log(rest(34, 67, 4, 7, 9));
