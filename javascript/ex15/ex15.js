const scores = [9, 8, 7, 6];

const student1 = {
  name: "linh",
  score: 9,
  address: {
    city: "hcm",
    country: "vietnam",
  },
};

const student2 = {
  name: "lita",
  score: 8,
  address: {
    city: "hcm",
    country: "vietnam",
  },
};

const student3 = {
  name: "heo",
  score: 6,
  address: {
    city: "hcm",
    country: "vietnam",
  },
};

const student = [student1, student2, student3];

//get data
console.log("scores:", scores);
console.log("students:", student);
console.log("address:", student1.address); //lay gia tri trong obj

//set data
student1.age = 21;
student1.haha = "haha";
console.log("student 1:", student1);

//delete data
delete student1.haha;
console.log("student 1:", student1);

//for-each
student.forEach((value, index) => {
  console.log("index:", index, "name:", value.name);
});

//for-in: duyet qua tat ca thuoc tinh
for (let key in student1) {
  console.log(key, student1[key]);
}

//for-of: duyet qua tat ca gia tri
for (let value of Object.values(student1)) {
  console.log(value);
}
