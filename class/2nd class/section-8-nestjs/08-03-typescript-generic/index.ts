// 1. 문자/숫자/불린 기본 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("hello", 123, true);

// 2. any 타입
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};

const result2 = getAny("hello", 123, true);
console.log("result2");
