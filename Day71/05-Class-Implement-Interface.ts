/*****************************
 * CLASS IMPLEMENT INTERFACE *
 *****************************/

class Product {
    // 'private' property
    private static nextId: number = 1;
  
    constructor(private id: number, private name: string) {}
  
    static generateNextId(): number {
      return Product.nextId++;
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  
  // Generate unique IDs for products using the static method
  const product1implement = new Product(
    Product.generateNextId(),
    "Widget"
  );
  const product2implement = new Product(
    Product.generateNextId(),
    "Gadget"
  );
  
  console.log(product1implement.getProductInfo()); // ID: 1, Name: Widget
  console.log(product2implement.getProductInfo()); // ID: 2, Name: Gadget