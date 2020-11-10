const { checkRunTimes } = require('../../../utils/javascript');

const RANGE = 1000000000;

const compareString = () => {
  for (let i = 0; i < RANGE; i++) {
    const bool = 'A' === 'A'
  }
}

const compareNumber = () => {
  for (let i = 0; i < RANGE; i++) {
    const bool = 1 === 1
  }
}

checkRunTimes([compareString, compareNumber]);