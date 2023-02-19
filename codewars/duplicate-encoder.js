const duplicateEncode = (word) => {
  word = word.toLowerCase();

  const charCount = Array.from(word).reduce((obj, char) => {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
    return obj;
  }, {});

  const result = Array.from(word)
    .map((char) => {
      return charCount[char] === 1 ? "(" : ")";
    })
    .join("");

  return result;
};

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
