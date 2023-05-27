function getString(arg: string): string {
    return arg;
}

const result1 = getString("aaa");

function getNumber(arg: number): number {
    return arg;
}

const result2 = getNumber(3);

// 3. any 타입
function getAny(arg: any): any {
    return arg;
}
const result3_1 = getAny("철수");
const result3_2 = getAny(13);

// 4. generic
function getGeneric<MyType>(arg: MyType): MyType {
    return arg;
}

// 5. any 타입
function getAnyReverse(arg1: any, arg2: any, arg3: any): any {
    return [arg3, arg2, arg1];
}
const result5_1 = getAnyReverse("철수", "eee", 323);

// 6. generic 타입 - 응용
// prettier-ignore
function getGenReverse<MyType1,MyType2,MyType3>(arg1: MyType1,arg2: MyType2,arg3: MyType3): [MyType3, MyType2, MyType1] {
    return [arg3, arg2, arg1];
}
const result6 = getAnyReverse("철수", "eee", 323);

// 7. generic 타입 - 응용/축약
// 6. generic 타입 - 응용
// prettier-ignore
function getGenReverseT<T1,T2,T3>(arg1: T1,arg2: T2,arg3: T3): [T3, T2, T1] {
    return [arg3, arg2, arg1];
}
const result7 = getAnyReverse("철수", "eee", 323);
