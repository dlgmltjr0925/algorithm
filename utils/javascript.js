exports.checkRunTime = async (callback, label = callback.name) => {
  console.time(label)
  await callback();
  console.timeEnd(label);
}