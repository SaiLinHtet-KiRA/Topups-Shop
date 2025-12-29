import { Currency } from "../interface/types/Coin";
import { Payment } from "../interface/types/Recharge";
export default class RechargeDto {
    customer_id: string;
    currency: Currency;
    payment: Payment;
    package_id: string;
    payment_index?: number;
    file: string;
}
