/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let tempNumber = init;

    return {
        increment : () => tempNumber += 1,
        decrement : () => tempNumber -= 1,
        reset : () => tempNumber = init,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */