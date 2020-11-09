const { checkRunTime } = require('../../../utils/javascript');

const RANGE = 1000000;

const obj = {}
const arr = Array.from(new Array(RANGE), (_, i) => {
  if (i % 100 === 0) {
    obj[i] = i;
    return i;
  } else {
    return undefined;
  }
  
});

const useFor = () => {
  for (const i in arr) {
    const value = i;
  }
}

const useForEach = () => {
  arr.forEach((_, i) => {
    const value = i;
  })
}

const useForWithObject = () => {
  for (const i in obj) {
    const value = i;
  }
}

const useForEachWithKeyOfObject = () => {
  Object.keys(obj).forEach((_, i) => {
    const value = i;
  })
}

checkRunTime(useFor); // 302.552ms
checkRunTime(useForEach); // 31.033ms
checkRunTime(useForWithObject); // 13.624ms
checkRunTime(useForEachWithKeyOfObject); // 10.661ms
