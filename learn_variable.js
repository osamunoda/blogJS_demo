/*----------------------------------- varによる変数作成 */
// e.g.1
function multiply(num){
    var rate = 3;
    return num * 3;
}
var result = multiply(2);
console.log(result); // 6
// varはfunctionスコープ、関数外からはアクセスできない
//console.log(rate); // Can't find variable: rate

/*------------------------------ constを使用した変数の作成 */
// const --> block scope
//e.g.2
function multiply2(num){
    if(num > 0){
        const rate2 = 3;
        return rate2 * num
    }else{
        const rate2 = -3;
        return rate2 * num;
    }
}
const result2 = multiply2(2);
console.log(result2); // 6
//console.log(rate2); // Can't find variable: rate

//e.g.3
const a = 1;
//a = 2;
//constは再代入不可

/*-------------------------------- letを使用した変数の作成 */
// let --> block scope
//e.g.4
let b = 1;
b = 2; // 再代入OK

//e.g.5
function multiply3(num){
    let rate3;
    if(num > 0){
        rate3 = 3;
    }else{
        rate3 = -3;
    }
    return rate3 * num
}
const result3 = multiply3(2);
console.log(result3); // 6
//console.log(rate3); // Can't find variable: rate3