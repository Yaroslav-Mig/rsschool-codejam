function make() {
    function closureFunc(args) {

    };

    closureFunc.valueOf = function () {
        return value;
    };

    return closureFunc;
}

function sum(a, b) {
    return a + b;
}

make(15)(34, 21, 666)(41)(sum);