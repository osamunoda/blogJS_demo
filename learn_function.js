/**
 * 関数
 */
/*-------------------------- 関数宣言 */
function multiply(num, rate){
    return num * rate;
}
const result = multiply(2, 3);
console.log(result); // 6

/*-------------------------- 関数式 */
const multiply2 = function(num, rate){
    return num * rate;
};
const result2 = multiply2(2, 3);
console.log(result2); // 6

/*-------------------------- 高階関数1 */
// 関数を返す関数
const doubleFunc = createFunc(2);
const result3 = doubleFunc(3);
console.log(result3); // 6 
/* 関数は後方で宣言してもOK */
function createFunc(rate){
    return function(num){
        return num * rate;
    }
}

/*-------------------------- 高階関数2 */
// 関数を引数とする関数
function double(num){
    return num * 2;
}
const multiply3 = function(num, func){
    return func(num)
};
const result4 = multiply3(3, double);
console.log(result4); // 6

/*-------------------------- 即時関数 */
(function(){
    const a = 1; // これならグローバルは汚れない
    const result = double(a); //外側の変数、関数にはアクセスできる
    console.log(result);
}())

/*-------------------------- 即時関数：クロージャ */
const increment = ( function (){
    let counter = 0;
    return function (){
        return counter++;
    }
}()); // 関数定義と同時に実行
console.log( increment() ); //0
console.log( increment() ); //1 

/**
 * 配列
 */
/** 作成パターン1 */
const arr = [];
// constは再代入不可だが、要素の追加はOK。
arr.push(1); //[1]
arr.push(2); // [1, 2]
// 配列の要素は同じ型でなくても可
arr.push('a'); // [1, 2, 'a']
// 配列の要素数：length 
console.log(arr.length);// 3
// 配列のindexは0スタート
console.log(arr[1]); //2

/** 作成パターン２ */
const text = "a,b,c,d,e"
const arr2 = text.split(",");
console.log(arr2[0]); // a
console.log(arr2[4]); // e

const str = "a b c d e";
const arr3 = text.split(/\s/); //正規表現も使用できる