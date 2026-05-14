//if else
const age = 21;

if (age > 18) {
    console.log("enjoy your video")
} else {
    console.log("you can't watch this video")
}

//else if
const score = -1;

if (score >= 9 && score <= 10) {
    console.log("Excellent")
} else if (score < 9 && score >= 7) {
    console.log("Good")
} else if (score < 7 && score >= 5) {
    console.log("Average")
} else if (score < 5 && score >= 3) {
    console.log("Poor")
} else if (score < 3 && score >= 0) {
    console.log("Very Poor")
} else {
    console.log("Invalid score!")
}