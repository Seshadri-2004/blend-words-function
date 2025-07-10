function blendWords(word1, word2) {
    if (word1.length === 0 && word2.length === 0) {
        return "";
    }
    if (word1.length === 0) return word2;
    if (word2.length === 0) return word1;

    if (word1[word1.length - 1] === word2[0]) {
        return word1 + word2.slice(1);
    }

    return word1 + word2;
}

// Example usage:
console.log(blendWords("code", "editor")); // "codeitor"
console.log(blendWords("read", "day"));    // "readay"
console.log(blendWords("a", "apple"));     // "apple"
console.log(blendWords("", "hello"));      // "hello"
console.log(blendWords("start", ""));      // "start"
console.log(blendWords("", ""));           // ""
