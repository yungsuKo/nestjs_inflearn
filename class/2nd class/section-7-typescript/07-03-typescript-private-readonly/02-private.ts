// // public, private, readonly, protected

// 안에서 수정 가능
// 안에서 접근 가능
// 자식이 수정 불가
// 자식이 접근 불가
// 밖에서 수정 불가
// 밖에서 접근 불가

// class Monster3 {
//     // power => public , private, readonly, protected 중 한 개라도 있으면 생략이 가능해짐
//     constructor(private power: any) {
//         // 밖에서 수정, 접근 불가
//         // this.power = power; => public , private, readonly, protected 중 한 개라도 있으면 생략이 가능해짐
//     }

//     attack = () => {
//         console.log("공격!!!");
//         console.log("내 공격력은 " + this.power + "입니다.");
//     };

//     run = () => {
//         console.log("도망!!!");
//     };
// }

// class FlyMonster3 extends Monster3 {
//     // 오버라이딩 했다. 라고 함.
//     // 기존에 있던 run 메소드를 덮어씀
//     constructor(power) {
//         super(power);
//     }
//     run = () => {
//         console.log("날아!!!");
//     };
// }

// const flymonster3 = new FlyMonster3(20);
// console.log("====================================");
// flymonster3.attack();
// flymonster3.run();
// flymonster3.power = 10;
// console.log(flymonster3.power);
// console.log("====================================");
