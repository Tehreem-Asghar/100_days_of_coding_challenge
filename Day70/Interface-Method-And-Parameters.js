console.log("***** INTERFACE METHOD AND PARAMETERS *****");
var student = {
    name: "Tehreem",
    present: true,
    Action: function () {
        console.log("".concat(this.name, " Attend today class : ").concat(this.present));
    },
};
student.Action(); // output : Tehreem Attend today class : true
