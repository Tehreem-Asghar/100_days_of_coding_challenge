var Names;
(function (Names) {
    Names[Names["Ayesha"] = 0] = "Ayesha";
    Names[Names["Tehreem"] = 1] = "Tehreem";
    Names[Names["Arham"] = 2] = "Arham";
    Names[Names["Sarim"] = 3] = "Sarim";
    Names[Names["Taha"] = 4] = "Taha";
})(Names || (Names = {}));
var Name = Names.Sarim; // it will return index
console.log(Name); // output 3
var returnValue = Names[Name]; // it will return value
console.log(returnValue); // output sarim
console.log(Names);
