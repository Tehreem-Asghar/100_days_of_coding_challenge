/*****************************
 * CLASS IMPLEMENT INTERFACE *
 *****************************/
var Product = /** @class */ (function () {
    function Product(id, name) {
        this.id = id;
        this.name = name;
    }
    Product.generateNextId = function () {
        return Product.nextId++;
    };
    Product.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    // 'private' property
    Product.nextId = 1;
    return Product;
}());
// Generate unique IDs for products using the static method
var product1implement = new Product(Product.generateNextId(), "Widget");
var product2implement = new Product(Product.generateNextId(), "Gadget");
console.log(product1implement.getProductInfo()); // ID: 1, Name: Widget
console.log(product2implement.getProductInfo()); // ID: 2, Name: Gadget
