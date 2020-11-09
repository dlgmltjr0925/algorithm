const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = ['4 5 1', '1 2', '1 3', '1 4', '2 4', '3 4'];
// const input = [`5 5 3`, `5 4`, `5 2`, `1 2`, `3 4`, `3 1`];
// const input = [`1000 1 1000`, `999 1000`];

const [n, m, v] = input[0].split(' ').map(value => parseInt(value));

const map = [...new Array(n + 1)].map(() => new Array(n + 1));

const resultDFS = new Set();
const resultBFS = new Set();

for (let i = 1; i <= m; i++) {
  const [n1, n2] = input[i].split(' ').map(value => parseInt(value));
  map[n1][n2] = true;
  map[n2][n1] = true;
}

const dfs = (start) => {
  // console.log('dfs', start);
  resultDFS.add(start);
  map[start].forEach((_, i) => { if (!resultDFS.has(i)) dfs(i) });
}


const bfs = () => {
  resultBFS.add(v)
  const queue = [v];
  do {
    const start = queue.shift();
    // console.log('bfs', start);
    map[start].forEach((_, i) => {
      if (!resultBFS.has(i)) {
        resultBFS.add(i);
        queue.push(i);
      }
    })
  } while(queue.length > 0)
}

dfs(v);
bfs();

console.log([...resultDFS.values()].join(' '));
console.log([...resultBFS.values()].join(' '));