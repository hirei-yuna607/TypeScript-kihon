/* eslint-disable */

/*TypeScriptの基本的な型 */

//boolean
let bool: boolean = true;

//number 数値
let number: number = 10;

//string 文字
let string: string = "aaa";

//array 配列
let arr1: Array<number> = [0, 1, 2]; //推奨
let arr2: number[] = [0, 1, 2];

//tuple
let tuple: [number, string] = [0, "aaa"];

//any
let any1: any = false; //なるべく使わない様に

//void 何も返却しない
const funcA = (): void => {
  const test = "TEST";
};

//null
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

//object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 10, name: "as" };
