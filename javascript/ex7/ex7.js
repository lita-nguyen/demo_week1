const score = 9;

switch (score) {
    case 9:
        console.log("Excellent")
        break;
    case 7:
        console.log("Good")
        break;
    case 5:
        console.log("Average")
        break;
    case 3:
        console.log("Poor")
        break;
    case 0:
        console.log("Very Poor")
        break;
    default:
        console.log("Invalid score!")
}


switch (true) {
    case (score >= 9 && score <= 10):
        console.log("Excellent")
        break;
    case (score < 9 && score >= 7):
        console.log("Good")
        break;
    case (score < 7 && score >= 5):
        console.log("Average")
        break;
    case (score < 5 && score >= 3):
        console.log("Poor")
        break;
    case (score < 3 && score >= 0):
        console.log("Very Poor")
        break;
    default:
        console.log("Invalid score!")
}