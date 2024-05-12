/***************************
 * CLASS ACCESS MODIFIERS: *
 ***************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1) Public
var Public_modifier = /** @class */ (function () {
    function Public_modifier(id, name) {
        this.id = id;
        this.name = name;
    }
    return Public_modifier;
}());
var public_Modifier = new Public_modifier(43547, "Tehreem");
console.log(public_Modifier);
console.log(public_Modifier.id); // Accessing the public property
// 2) private
var Private_modifier = /** @class */ (function () {
    function Private_modifier(id, name) {
        this.id = id;
        this.name = name;
    }
    Private_modifier.prototype.privateProperty = function () {
        console.log(this.id); // private property accessable in class method but not accessable out of class.
        console.log(this.name);
    };
    return Private_modifier;
}());
var private_modifier = new Private_modifier(123456, "Arham");
console.log(private_modifier);
// private_modifier.id // This would result in an error because id property is private
private_modifier.privateProperty(); // this is a valid way to access private property
// 3) Protected
var protected_Parent = /** @class */ (function () {
    function protected_Parent(id) {
        this.id = id;
    }
    return protected_Parent;
}());
var Protected_child = /** @class */ (function (_super) {
    __extends(Protected_child, _super);
    function Protected_child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Protected_child.prototype.ID = function () {
        console.log(this.id);
    };
    return Protected_child;
}(protected_Parent));
var protected_parent = new protected_Parent(123345);
// protected_parent.id // This would result in an error because id is protected
var protected_child = new Protected_child(246679);
protected_child.ID(); // This is a valid way to access the protected property
