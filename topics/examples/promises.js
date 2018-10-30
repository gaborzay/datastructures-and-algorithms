const promise = new Promise(function (resolve, reject) {
  console.log('Promise Example');
  setTimeout(function () {
    const num = Math.floor(Math.random() * 100);
    num % 2 === 0 ? resolve({even: num}) : reject({odd: num});
  }, 1000);
}).then((result) => {
  console.log({first: result});
  const even = result.even;
  return {...result, even: even * 2};
}).then((result) => {
  console.log({second: result});
  const even = result.even;
  return {...result, even: even * 2};
}).then((result) => {
  console.log({third: result});
  const even = result.even;
  return {...result, even: even * 2};
}).catch(error => {
  console.log({error});
});

module.exports = promise;