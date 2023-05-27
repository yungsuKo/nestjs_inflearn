interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
}

type aaa = {
    name: string;
    age: number;
    school: string;
    hobby?: string;
};

// interface는 선언 병합이 가능함.
interface IProfile {
    apple: string;
}

// const bbb: IProfile = {};

// 1. Partial 타입
type MyType1 = Partial<IProfile>;

// 2. Required 타입
type MyType2 = Required<IProfile>;

// 3. Pick 타입
type MyType3 = Pick<IProfile, "name" | "age">;

// 4. Omit 타입
type MyType4 = Omit<IProfile, "school">;

// 5. Record 타입
type zzz = "aaa" | "qqq" | "rrr";
type MyType5 = Record<zzz, string>;

// 만약 union 타입을 만들려면?? => "name" | "age" | "hobby"
const qqq: keyof IProfile;
