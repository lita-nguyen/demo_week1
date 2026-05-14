//global scope
let globalVar = "Tôi là biến toàn cục";

function show() {
  console.log(globalVar); // Truy cập được
}

show();
console.log(globalVar); // Truy cập được

//function scope
function sayHi() {
  let name = "Linh";
  console.log("Hi " + name);

  //block scope
  if (true) {
    let x = 10;
    const y = 20;
    console.log(x, y); //Truy cập được
  }
}

sayHi();
