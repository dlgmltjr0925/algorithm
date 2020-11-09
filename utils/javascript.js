exports.checkRunTime = async (callback, options = { label: callback.name, count: 100 }) => {
  const label = options.label || callback.name;
  let count = options.count || 10;
  let time = 0;
  for (let i = 0; i < count; i++) {
    const start = new Date();
    await callback(); 
    const end = new Date();
    time += end.valueOf() - start.valueOf();
    if (time > 10000) count = i + 1;
  }

  console.log(`${label}: ${time / count}ms`)

  // console.time(label)
  // await callback();
  // console.timeEnd(label);
}