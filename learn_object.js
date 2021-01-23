/**
 * JSことはじめ　第3回 オブジェクト
 */

 /** オブジェクト作成 */
 const person = {
     first_name: "太郎",
     age: 50
 };
 console.log(person);

 /** プロパティ（キー）の追加 pattern-1 */
 person.address = "Tokyo";
 console.log(person);

 /** プロパティ（キー）の追加 pattern-2 */
 person["last_name"] = "山田";
 console.log(person);

 /** 動的なプロパティの追加 */
 const days = ["Mon", "Tue", "Wed"];
const value = [100, 200, 300];
const obj ={};
// 空のオブジェクトを作成しておき後からプロパティ（キー）を追加
days.forEach(function(day, index){
    obj[day] = value[index];
})
console.log(obj);

/** JSON.parse JSONをオブジェクトに変換*/
const jsonText = '{"name":"Smith","age":20}';
const man = JSON.parse(jsonText);
console.log(man);
console.log(man.age);

/** JSON.stringify オブジェクトをJSONに変換 */
const text = JSON.stringify(man);
console.log(text);
console.log(text.length);

/** JSONデータトランスフォーム */
const peopleList = `[{"firstName":"太郎", "lastName": "山田"},
{"firstName":"一郎", "lastName": "鈴木"},
{"firstName":"花子", "lastName": "佐藤"},
{"firstName":"二郎", "lastName": "斎藤"},
{"firstName":"洋子", "lastName": "加藤"}]`;
console.log(typeof peopleList);
const arr = JSON.parse(peopleList);
console.log(arr.length);
const newArr = arr.map(function(person){
    return {name: person.lastName + " " + person.firstName}
});
console.log(newArr);
const transformedJSON = JSON.stringify(newArr);
console.log(transformedJSON);
// 注意：JSにおけるクオート
// FileMakerにおいてはテキストを表すクオートはダブルクオートのみでしたが、JSではそれ以外にも''（シングルクオート）``（バックティック）によってテキストを囲むことができます。
// ``(バックティック)はES6からの仕様でありIEでは使えません。これを使うと上記のように複数行テキストの表示代入が可能です。
// ``をシングルクオートにエラーになります。
const multilines = 'abs\ndef\nghi';
// 複数行をシングル、ダブルクオート内で扱うには上記のような形をとります。

/** 正規表現によるテキストのコンバート */
// FileMakerよりもはるかに柔軟なテキストの置換が可能になります。
const sampleText = "スマホのパスワードでもっともよく使われたのは2018年度は1234、2019年度は1212、2020年度は7777でした。";
function callback(param){
    const result = param.replace(/\d{4}(?!年)/g, "****");
    return result;
}
const result = callback(sampleText);
console.log(result);