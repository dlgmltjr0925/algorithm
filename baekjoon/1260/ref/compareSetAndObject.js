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

checkRunTime(hasCheckWithSet);
checkRunTime(hasCheckWithArray);
checkRunTime(hasCheckWithObjMap);