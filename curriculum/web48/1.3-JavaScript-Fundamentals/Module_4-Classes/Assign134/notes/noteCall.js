/* from MDN Function.prototype.call()  */

console.log('------------------ noteCall.js -----------------------');

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
    return 'handle undefined!';
  }
  
  console.log( new Food('cheese', 5).name);
  console.log('typeof(Food) is: ',typeof(Food));
  console.log('Food is:', Food);
  console.log('Food("cheese", 5) is:', Food('cheese', 5));
  console.log('new Food("cheese", 5) is:',  new Food('cheese', 5));
//   console.log(  Food('cheese', 5).name);

  console.log('typeof(Product) is: ',typeof(Product));
  console.log('Product is:', Product);
  console.log('Product("cheese", 5) is:', Product('cheese', 5));
  console.log('new Product("cheese", 5) is:',  new Product('cheese', 5));
//   console.log(  Food('cheese', 5).name);
  
  // expected output: "cheese"
  