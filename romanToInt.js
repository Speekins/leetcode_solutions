//Convert roman numerals to integer

const romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
}

var romanToInt = function(s) {
  let split = s.split('')
  let total = 0
  let isDouble = false;
  for (let i = 0; i < s.length; i++) {
      if (isDouble) {
          isDouble = false
          continue
      }
      let val = checkForDouble(split[i], split[i + 1])
      total += val
      if (val !== romans[split[i]]) {
          isDouble = true
      }
  }
  return total;
};

function checkForDouble(idx, idx2) {
  if (idx === 'I' && (idx2 === 'V' || idx2 === 'X')) {
      return romans[idx2] - romans[idx]
  } else if (idx === 'X' && (idx2 === 'L' || idx2 === 'C')) {
      return romans[idx2] - romans[idx]
  } else if (idx === 'C' && (idx2 === 'D' || idx2 === 'M')) {
      return romans[idx2] - romans[idx]
  } else {
      return romans[idx]
  }
}