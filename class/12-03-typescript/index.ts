// 타입 추론
let xxx = 10
xxx = "안녕하세요"

// 타입 명시
let bbb:string = '반갑습니다'
bbb = 10

// 타입 명시가 필요한 상황
let ccc: string|number = '반갑습니다'
ccc = 10

// 숫자 타입
let ddd: number = 10
ddd = "철수"

// 불린 타입
let eee : boolean = true
eee = false

// 배열타입
let fff: number[] = [1,2,3,4,"안녕하세요"]
let ggg: string[] = ["철수", "영희", "훈이", 3]
let hhh:(string|number)[] = ["철수", "영희", "훈이", 3]

// 객체타입
interface IProfile {
    name: string,
    age: number | string,
    school: string,
    hobby?: string // 있어도 되고, 없어도 되는 값을 나타낼 때 표현
}

let profile: IProfile = {
    name : "철수",
    age : 21,
    school : "다람쥐대학교",
}
profile.age = "21살"
profile.hobby = "슈용"

// 함수타입 => 
const add = (money1: number, money2: number, unit: string): string => {
    return (money1 + money2) + unit
}

const result = add(1000, 2000, '원')