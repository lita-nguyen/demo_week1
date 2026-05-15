const scores = [10, 8, 3, 7, 5];

scores.forEach((value, index) => {
  console.log("index =", index, "value =", value);
});

const scores1 = scores.map((value, index) => {
  return value * 2;
});
console.log("scores =", scores);
console.log("scores =", scores1);
