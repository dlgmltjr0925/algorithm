const { checkRunTime } = require('../../../utils/javascript');

const RANGE = 1000000;

const useDestructure = () => {
  const arr = [...new Array(RANGE)].map((_, i) => i);
}

const useFromOfArray = () => {
  const arr = Array.from(new Array(RANGE), (_, i) => i);
}

checkRunTime(useDestructure); // 299.297ms
checkRunTime(useFromOfArray); // 239.740ms