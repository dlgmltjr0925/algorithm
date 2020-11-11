const { checkRunTimes } = require('../../../utils/javascript');

const RANGE = 100000;
const strArray = Array.from(new Array(RANGE), (_, i) => i + '');

const useParseInt = () => {
  for (const str of strArray) {
    const num = parseInt(str);
  }
};

const useParseFloat = () => {
  for (const str of strArray) {
    const num = parseFloat(str);
  }
};

const usePlus = () => {
  for (const str of strArray) {
    const num = +str;
  }
};

checkRunTimes([useParseInt, useParseFloat, usePlus]);

// Float to Number
// useParseInt: 7ms
// useParseFloat: 6.7ms
// usePlus: 7.8ms

// Int to Number
// useParseInt: 6.9ms
// useParseFloat: 5.6ms
// usePlus: 2.1ms
