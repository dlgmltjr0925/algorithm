exports.checkRunTime = async (callbacks, options = { count: 10 }) => {
  for (const callback in callbacks) {
    let count = options.count || 10;
    let time = 0;
    for (let i = 0 ;i < count; i++) {
      const start = new Date();
      await callback();
      const end = new Date();
      time += end.valueOf() - start.valueOf();
      if (time > 10000) count = i + 1;
    }

    console.log(`${callback.name}: ${time / count}ms`)
  }
}

exports.checkRunTime = async (callback, options = { label: callback.name, count: 10 }) => {
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