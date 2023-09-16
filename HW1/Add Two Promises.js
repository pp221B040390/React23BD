/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let val;
    await promise1.then((num) => val = num);
    await promise2.then((num1) => val += num1);
    return new Promise(resolve => resolve(val));
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */