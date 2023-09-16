/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let a = x;
        for(i=functions.length - 1; i>=0; i--){
            f = functions[i];
            a =  f(a)
        }
        return a;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */