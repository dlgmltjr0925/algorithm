// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
  '7',
  '0110100',
  '0110101',
  '1110101',
  '0000111',
  '0100000',
  '0111110',
  '0111000',
];

const n = parseInt(input.shift());
const map = input.map((row) => row.trim().split(''));

const direct = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

let group = 0;
const count = [];

const dfs = ([r, c]) => {
  map[r][c] = group;
  count[group]++;
  for (let i = 0; i < 4; i++) {
    const [dr, dc] = direct[i];
    const nr = r + dr;
    const nc = c + dc;
    if (nr < 0 || nc < 0 || nr === n || nc === n) continue;
    if (map[nr][nc] === '1') dfs([nr, nc]);
  }
};

for (let r = 0; r < n; r++) {
  for (let c = 0; c < n; c++) {
    if (map[r][c] === '1') {
      count[group] = 0;
      dfs([r, c]);
      group++;
    }
  }
}

console.log(count.length);
console.log(count.sort((a, b) => a - b).join('\n'));
