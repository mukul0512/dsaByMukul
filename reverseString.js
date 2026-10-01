let s = ["h", "e", "l", "l", "o"];
function reverseString(s) {
    let len = s.length;
    let halfLen = Math.floor(len / 2);
    for(let i = 0; i < halfLen; i++) {
        let temp = s[len - 1 - i];
        s[len - 1 - i] = s[i];
        s[i] = temp;
    }
    return s;
}

let res = reverseString(s);
console.log(res);