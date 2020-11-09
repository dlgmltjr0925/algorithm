// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = ['4 5 1', '1 2', '1 3', '1 4', '2 4', '3 4'];
const input = [`5 5 3`, `5 4`, `5 2`, `1 2`, `3 4`, `3 1`];
// const input = [`1000 1 1000`, `999 1000`];

const [n, m, v] = input[0].split(' ').map(value => parseInt(value));

const map = {};

let resultDFS = '';
let resultBFS = '';

for (let i = 1; i <= m; i++) {
  const [n1, n2] = input[i].split(' ').map(value => parseInt(value));
  if (!map[n1]) map[n1] = {};
  map[n1][n2] = n2;
  if (!map[n2]) map[n2] = {};
  map[n2][n1] = n1;
}

const resultDFSMap = {};
const dfs = (start) => {
  // console.log('dfs', start);
  resultDFS += start + ' ';
  resultDFSMap[start] = true;
  if (map[start]) Object.values(map[start]).forEach(i => { if (!resultDFSMap[i]) dfs(i) });
}


const resultBFSMap = {};
const bfs = () => {
  resultBFS += v + ' '
  resultBFSMap[v] = true
  const queue = [v];
  do {
    const start = queue.shift();
    // console.log('bfs', start);
    if (map[start]) Object.values(map[start]).forEach(i => {
      if (!resultBFSMap[i]) {
        resultBFS += i + ' '
        resultBFSMap[i] = true
        queue.push(i);
      }
    })
  } while(queue.length > 0)
}

dfs(v);
bfs();

console.log(resultDFS.replace(/\s$/, `\n`) + resultBFS.replace(/\s$/, ''));