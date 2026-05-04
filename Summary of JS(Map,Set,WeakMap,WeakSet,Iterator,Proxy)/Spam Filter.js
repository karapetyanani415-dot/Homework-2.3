function filterSpam(text, badWordsArray) {
    let set = new Set(badWordsArray)
    return text
        .split(" ")
        .map(word => set.has(word) ? "***" : word)
        .join(" ");
}

// Input

const text = "buy our new cheap product";
const badWords = ["cheap", "buy"];
// Expected Output
console.log(filterSpam(text, badWords));
// "*** our new *** product"