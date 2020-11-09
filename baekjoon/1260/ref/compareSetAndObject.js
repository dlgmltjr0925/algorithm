const { checkRunTime } = require('../../../utils/javascript');

const RANGE = 1000000;

const objMap = {}
const arrData = [...new Array(RANGE)].map((_, i) => {
  objMap[i] = true;
  return i;
});
const setData = new Set(arrData);

const hasCheckWithSet = () => {
  for (let i = 0; i < RANGE; i = i + 100) {
    setData.has(i);
  }
}

const hasCheckWithArray = () => {
  for (let i = 0; i < RANGE; i = i + 100) {
    arrData.find(value => value === i);
  }
}

const hasCheckWithObjMap = () => {
  for (let i = 0; i < RANGE; i = i + 100) {
    objMap[i];
  }
}

const useArray = () => {
  for (let i = 0; i < RANGE; i++) {
    const value = arrData[i];
  }
}

const useObject = () => {
  for (let i = 0; i < RANGE; i++) {
    const value = objMap[i];
  }
}

(async () => {
  await checkRunTime(hasCheckWithSet); // 0.95m
  await checkRunTime(hasCheckWithArray); // 35818ms
  await checkRunTime(hasCheckWithObjMap); // 0.16ms

  await checkRunTime(useArray); // 0.94ms
  await checkRunTime(useObject); // 0.76ms
})();