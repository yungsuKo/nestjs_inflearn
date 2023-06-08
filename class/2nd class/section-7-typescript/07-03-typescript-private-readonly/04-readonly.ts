// public, private, readonly, protected

// 안에서 수정 불가
// 안에서 접근 가능
// 자식이 수정 불가
// 자식이 접근 가능
// 밖에서 수정 불가
// 밖에서 접근 가능

// class Monster2 {
//     // power => public , private, readonly, protected 중 한 개라도 있으면 생략이 가능해짐
//     constructor(readonly power: any) {
//         // this.power = power; => public , private, readonly, protected 중 한 개라도 있으면 생략이 가능해짐
//     }

//     attack = () => {
//         console.log("공격!!!");
//         console.log("내 공격력은 " + this.power + "입니다.");
//         this.power = 10;
//     };

//     run = () => {
//         console.log("도망!!!");
//     };
// }

// class FlyMonster2 extends Monster2 {
//     // 오버라이딩 했다. 라고 함.
//     // 기존에 있던 run 메소드를 덮어씀
//     constructor(power) {
//         super(power);
//     }
//     run = () => {
//         console.log("날아!!!");
//     };
// }

// const flymonster = new FlyMonster2(20);
// console.log("====================================");
// flymonster.attack();
// flymonster.run();
// flymonster.power = 10;
// console.log(flymonster.power);
// console.log("====================================");
