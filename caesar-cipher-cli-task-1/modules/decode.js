function decode(str, num) {

  const lowerCaseSymbolsWithIndexes = {
    z: 0,
    y: 1,
    x: 2,
    w: 3,
    v: 4,
    u: 5,
    t: 6,
    s: 7,
    r: 8,
    q: 9,
    p: 10,
    o: 11,
    n: 12,
    m: 13,
    l: 14,
    k: 15,
    j: 16,
    i: 17,
    h: 18,
    g: 19,
    f: 20,
    e: 21,
    d: 22,
    c: 23,
    b: 24,
    a: 25
  };

  const upperCaseSymbolsWithIndexes = {
    Z: 0,
    Y: 1,
    X: 2,
    W: 3,
    V: 4,
    U: 5,
    T: 6,
    S: 7,
    R: 8,
    Q: 9,
    P: 10,
    O: 11,
    N: 12,
    M: 13,
    L: 14,
    K: 15,
    J: 16,
    I: 17,
    H: 18,
    G: 19,
    F: 20,
    E: 21,
    D: 22,
    C: 23,
    B: 24,
    A: 25
  };

  const lowerCaseSymbolStr = 'zyxwvutsrqponmlkjihgfedcba';
  const upperCaseSymbolStr = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';

  let output = '';

  for (let i = 0; i < str.length; i += 1) {
    if (lowerCaseSymbolsWithIndexes.hasOwnProperty(str[i])) {
      output += lowerCaseSymbolStr[((lowerCaseSymbolsWithIndexes[str[i]] + num) % 26)];
    } else if (upperCaseSymbolsWithIndexes.hasOwnProperty(str[i])) {
      output += upperCaseSymbolStr[((upperCaseSymbolsWithIndexes[str[i]] + num) % 26)];
    } else {
      output += str[i];
    }
  }

  return output;
}

module.exports = decode;
