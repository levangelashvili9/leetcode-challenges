const duplicateCount = (text) => {
  text = text.toLowerCase();

  const charCount = Array.from(text).reduce((obj, char) => {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
    return obj;
  }, {});

  const result = Array.from(text).filter((char) => {
    return charCount[char] > 1;
  });

  const countDuplicates = [...new Set(result)];

  return countDuplicates.length;
};

console.log(duplicateCount("aabcdEEed"));
