/*
function lengthOfLastWord(s) {
    s = s.trim();
    s = s.split(" ");
    return s[s.length - 1].length;
};

*/
function lengthOfLastWord(s) {
    // Step 1: Skip all spaces at the end
    let n = s.length - 1;

    while (n >= 0) {
        if (s[n] !== " ") {
            break;
        }
        --n;
    }

    // Step 2: Count characters in the last word
    let count = 0;

    while (n >= 0) {
        if (s[n] === " ") {
            break;
        }

        --n;
        ++count;
    }

    return count;
};

// Helper function to test the code
function main() {
    let s1 = "Hello World";
    let s2 = "   fly me   to   the moon  ";
    let s3 = "luffy is still joyboy";
    let s4 = "   Hello   ";

    console.log("Input:", JSON.stringify(s1));
    console.log("Length of last word:", lengthOfLastWord(s1));

    console.log("\nInput:", JSON.stringify(s2));
    console.log("Length of last word:", lengthOfLastWord(s2));

    console.log("\nInput:", JSON.stringify(s3));
    console.log("Length of last word:", lengthOfLastWord(s3));

    console.log("\nInput:", JSON.stringify(s4));
    console.log("Length of last word:", lengthOfLastWord(s4));
}

main();