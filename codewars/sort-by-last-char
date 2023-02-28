const last = (str) => {
  const words = str.split(" ");
  return words.sort((a, b) => {
    const lastA = a.at(-1);
    const lastB = b.at(-1);
    if (lastA === lastB) {
      return words.indexOf(a) - words.indexOf(b);
    }
    return lastA < lastB ? -1 : 1;
  });
};

console.log(last("man i need a taxi up to ubud"));
