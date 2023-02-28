const wave = (str) => {
  str = str.toLowerCase();

  const waveArray = [...str].reduce((arr, char, index) => {
    if (/[a-z]/.test(char)) {
      arr.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
    }
    return arr;
  }, []);

  return waveArray;
};

console.log(wave("hello bro"));
