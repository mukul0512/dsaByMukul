// create a function which accepts the age & tells whether a person is eligible to vote or not.
function isEligibleToVote(age) {
    // if (age < 1) {
    //     console.log("Invalid age");
    // }
    // if (age >= 18) {
    //     return "Eligible to vote";
    // }
    // else {
    //     return "Not eligible to vote";
    // }
    if (age < 1) return "Invalid age";
    if (age >= 18) return "Eligible to vote";
    else return "Not eligible to vote";
    // let res = (age >= 18) ? "Eligible to vote" : "Not eligible to vote"
    // console.log(res);
    // if (age < 1) console.log("Invalid age");
    // (age >= 18) ? console.log("Eligible to vote") : console.log("Not eligible to vote");
}

// isEligibleToVote(-5);
let res = isEligibleToVote(-5);
console.log(res);