class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  addToCart() {
    console.log(`The product ${this.name} has been added to the cart.`);
  }

  removeFromCart() {
    console.log(`The product ${this.name} has been removed from the cart.`);
  }
}

let product1 = new Product("Laptop", 1500, 1);
console.log(product1);
