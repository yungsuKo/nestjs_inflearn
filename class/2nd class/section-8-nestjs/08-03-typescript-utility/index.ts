interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

interface IProfile2 extends IProfile {
  hobby: string;
}

const profile: IProfile = {
  name: "happy",
  age: 30,
  school: "seoul",
};

const profile2: IProfile2 = {
  name: "happy",
  age: 30,
  school: "seoul",
  hobby: "soccer",
};

// 1. Partial 타입
type aa = Partial<IProfile>;

// 2. Required 타입
type bb = Required<IProfile>;

// 3. Pick 타입
type cc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입 : 제외하는 타입
type dd = Omit<IProfile, "name" | "age">;

// 5. Record 타입
type ee = "철수" | "영희" | "훈이"; // Union 타입
let child: ee = "철수";

type ff = Record<ee, { age: number }>; // Record 타입

// 6. 객체의 key들로 Union 타입 만들기
type gg = keyof IProfile;
let myprofile: gg = "hobby";

// 7. type vs interface : type은 확장이 안되지만 interface는 확장(선언 병합)이 가능하다.
