//for
for (let i = 0; i <= 5; i++) {
    console.log("i = ",i);
}

//while
let score = 10;

while (score > 5) {
    console.log("check score: ",score);
    score--;
}

//do-while
let score1 = 10;
do {
    console.log("check score1: ",score1);
    score1--;
} while (score1 > 50);

//break
for (let i = 1; i < 10; i++) {
    console.log("i = ",i);
    if (i === 5) {
        break;
    }
}

//continue
for (let i = 1; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log("i = ",i);
}