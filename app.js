function add(n1, n2, shoResult) {
    // if(t/ypeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('入力正しくない')
    // }
    if (shoResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var prinResult = true;
var result = add(number1, number2, prinResult);
