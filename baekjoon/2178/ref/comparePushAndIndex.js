const { checkRunTimes } = require('../../../utils/javascript');

const RANGE = 1000000000;
// const RANGE = 10;

const usePush = (range) => {
  const arr = [];
  for (let i = 0; i < range; i++) {
    arr.push(i);
  }
}

const usePushPop = (range) => {
  const arr = [];
  for (let i = 0; i < range; i++) {
    arr.push(i);
    arr.pop();
  }
}

const useIndex = range => {
  const arr = new Array(range)
  for (let i = 0; i < range; i++) {
    arr[i] = i;
  }
}

// checkRunTimes([usePush, useIndex])


(async () => {
  for (let i = 1; i < RANGE; i *= 10) {
    console.log('\nRANGE :', i)
    const _usePush = () => usePush(i)
    const _usePushPop = () => usePushPop(i);
    const _useIndex = () => useIndex(i);
    await checkRunTimes([_usePush, _usePushPop, _useIndex])
  }
})()

// Result 
// RANGE : 1
// _usePush: 0.1ms
// _usePushPop: 0ms
// _useIndex: 0ms

// RANGE : 10
// _usePush: 0ms
// _usePushPop: 0ms
// _useIndex: 0ms

// RANGE : 100
// _usePush: 0ms
// _usePushPop: 0.2ms
// _useIndex: 0ms

// RANGE : 1000
// _usePush: 0.1ms
// _usePushPop: 0.3ms
// _useIndex: 0.1ms

// RANGE : 10000
// _usePush: 0.6ms
// _usePushPop: 0ms
// _useIndex: 0.1ms

// RANGE : 100000
// _usePush: 2.6ms
// _usePushPop: 0.5ms
// _useIndex: 1.1ms

// RANGE : 1000000
// _usePush: 33.6ms
// _usePushPop: 3.6ms
// _useIndex: 7ms

// RANGE : 10000000
// _usePush: 391.9ms
// _usePushPop: 33.2ms
// _useIndex: 64.8ms

// RANGE : 100,000,000
// _usePush: 4122.333333333333ms
// _usePushPop: 353.1ms
// _useIndex: 7069.5ms