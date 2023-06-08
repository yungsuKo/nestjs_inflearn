import { CashService } from "./services/cash.js";

export class CouponController {
    buyCoupon = (req, res) => {
        const cashService = new CashService();
        const hasMoney = cashService.checkValue();
        if (hasMoney) {
            res.send("구매 성공");
        }
    };

    refundCoupon = (req, res) => {
        res.send("환불 성공");
    };
}
