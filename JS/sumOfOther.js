let array = [2, 3, 4, 1];

let result = (function (arr) {
    const arrLen = arr.length;
    let filtredArr = [];

    for (let i = 0; i < arrLen; i++) {
        const sum = arr.reduce((accum, current) => accum + current, 0) - arr[i];
        filtredArr.push(sum);
    }

    return filtredArr;
})(array);