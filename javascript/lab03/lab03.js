const productA = {
  name: "T-shirt",
  price: 200,
  inStock: true,
};

const productB = {
  name: "Skirt",
  price: 120,
  inStock: true,
};

const productC = {
  name: "Polo",
  price: 300,
  inStock: false,
};

const productD = {
  name: "Jeans",
  price: 100,
  inStock: false,
};

const productE = {
  name: "Dress",
  price: 550,
  inStock: true,
};

const products = [productA, productB, productC, productD, productE];

//1
const firstProduct = products[0];
console.log("Product 1:", firstProduct.name);

//2
productB.price = 150;
console.log("Products:", products);

//3
products.push({
  name: "Last Product",
  price: 350,
  inStock: false,
});
console.log("Products:", products);

//4
products.pop();
console.log("Products:", products);

//5
products.forEach((value, index) => {
  console.log("Product Name:", value.name);
});

//6
const listPrice = products.map((value, index) => {
  return value.price;
});
console.log("Price:", listPrice);

//7
const inStock = products.filter((value, index) => {
  return value.inStock === true;
});
console.log("In Stock:", inStock);

//8
for (const key in productA) {
  console.log(key, productA[key]);
}
