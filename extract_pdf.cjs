const fs = require('fs');
const buf = fs.readFileSync('C:/Users/zrb39/Downloads/0f43fc7e-e24c-46d2-b17e-3be3b71b00c5 (1) (1).pdf');
const str = buf.toString('latin1');

const results = [];
let i = 0;
while (i < str.length) {
  if (str[i] === '(') {
    let j = i + 1;
    let text = '';
    while (j < str.length && str[j] !== ')') {
      const ch = str[j];
      const backslash = String.fromCharCode(92);
      if (ch === backslash) { j += 2; continue; }
      text += ch;
      j++;
    }
    const clean = text.replace(/[^\x20-\x7E]/g, '').trim();
    if (clean.length > 3) results.push(clean);
    i = j + 1;
  } else {
    i++;
  }
}
console.log(results.join('\n'));
