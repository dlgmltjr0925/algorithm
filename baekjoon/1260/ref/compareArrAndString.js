const { checkRunTime } = require('../../../utils/javascript');

const RANGE = 1000000;

const arr = [...new Array(RANGE)].map((_, i) => i);

const useJoin = () => {
  const str = arr.join(' ')
}

const useString = () => {
  let str = '';
  arr.forEach(value => str += value + ' ');
  str.replace(/\s$/, '');
}

checkRunTime(useJoin)
checkRunTime(useString)