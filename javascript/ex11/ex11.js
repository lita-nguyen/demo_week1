const names = ["linh", "lita", "heo"];

const others = ["linh", true, 25, [1, 2, 3]];

console.log(names);
console.log(others);
console.log(names[2]);

//update
names[2] = "heo haha";
console.log(names);

//insert
names.unshift(true, 1); //dau
names.push(5, false); //cuoi
console.log(names);

//delete
names.shift(); //dau
names.pop(); //cuoi
console.log(names);
