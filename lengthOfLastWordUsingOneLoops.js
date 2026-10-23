
function lengthOfLastWord(s) {
    let n = s.length - 1; // Last index
    let count = 0;

    while (n >= 0) {
        if (s[n] !== " ") {
            ++count;
        } else if (count > 0) {
            break;
        }

        --n;
    }

    return count;
}

// Test cases
let s1 = "Hello World";
let s2 = "   fly me   to   the moon  ";
let s3 = "luffy is still joyboy";
let s4 = "Hello";

console.log("Input:", s1);
console.log("Length of last word:", lengthOfLastWord(s1));

console.log("\nInput:", s2);
console.log("Length of last word:", lengthOfLastWord(s2));

console.log("\nInput:", s3);
console.log("Length of last word:", lengthOfLastWord(s3));

console.log("\nInput:", s4);
console.log("Length of last word:", lengthOfLastWord(s4));