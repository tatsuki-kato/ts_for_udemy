function add(n1: number,n2: number, shoResult: boolean){
    // if(t/ypeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('入力正しくない')
    // }
    if(shoResult{
        console.log(n1 + n2);
    }else{
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 2.8;
const prinResult = true; 

const result = add(number1, number2, prinResult);
