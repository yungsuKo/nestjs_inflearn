// 데코레이터란 무엇인가
function Controller(aaaaa: any) {
    console.log("====================================");
    console.log(aaaaa);
    console.log("====================================");
}

@Controller
class CatsController {}
