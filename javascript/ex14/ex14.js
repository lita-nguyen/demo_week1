const ages = [10, 20, 30, 25, 12, 15];

const ages1 = ages.map((value, index) => {
  return value * 2;
});

const agesGreatThan18 = ages.filter((value, index) => {
  return value > 18;
});

console.log("age:", ages);
console.log("age x 2:", ages1);
console.log("age > 18", agesGreatThan18);
