import { CashService } from "./services/cash.service.js";

export class CouponController {
    cashService;
    constructor(cashService) {
        this.cashService = cashService;
    }

    buyCoupon = (req, res) => {
        // const cashService = new CashService();
        const hasMoney = this.cashService.checkValue();
        if (hasMoney) {
            res.send("구매 성공");
        }
    };

    refundCoupon = (req, res) => {
        res.send("환불 성공");
    };
}
