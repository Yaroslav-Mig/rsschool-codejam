function make(value) {
    function closureFunc(args) {
        let result = 0;

        if ('function' !== typeof args) {
            result = Array.from(arguments).reduce((accum, item) => accum + item, 0);
        }
        return make(result + value);
    }

    closureFunc.valueOf = function () {
        return value;
    };

    return closureFunc;
}

function sum(a, b) {
    return a + b;
}

make(15)(34, 21, 666)(41)(sum);
