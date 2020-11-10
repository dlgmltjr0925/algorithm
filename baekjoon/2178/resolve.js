const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = ['4 6', '101111', '101010', '101011', '111011'];
// const input = ['4 6', '110110', '110110', '111111', '111101'];
// const input = ['2 25', '1011101110111011101110111', '1110111011101110111011101'];
// const input = ['7 7', '1011111', '1110001', '1000001', '1000001', '1000001', '1000001', '1111111'];

const [n, m] = input.shift().split(' ').map(value => parseInt(value));

const map = input.map(row => row.trim().split(''));

const dy = [0, -1, 0, 1];
const dx = [-1, 0, 1, 0];

const gY = n - 1;
const gX = m - 1;

const queue = [[0, 0, 1]];
map[0][0] = '0';

const bfs = () => {
  do {
    const [y, x, count] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nY = y + dy[i];
      const nX = x + dx[i];
      if (nY === gY && nX === gX) return console.log(count + 1)
      if (nX < 0 || nY < 0 || nX >= m || nY >= n) continue;
      if (map[nY][nX] === '1') {
        queue.push([nY, nX, count + 1])
        map[nY][nX] = '0'
      }
    }
  } while (queue.length)
}

bfs();