const names = ["linh", "lita", "heo", "xiu", "haha"];

console.log(names, names.length);

for (let i = 0; i < names.length; i++) {
  console.log("i =", i, "and value =", names[i]);
}

//for-each
names.forEach(function (value, index) {
  console.log("value =", value, "index =", index);
});

//arrow function
names.forEach((value, index) => {
  console.log("value =", value, "index =", index);
});
