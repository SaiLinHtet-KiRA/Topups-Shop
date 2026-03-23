import { CheckId, Login } from "../../Topup/Topup.model";

export default interface TopupDto {
  game: string;
  package: {
    id: string;
    name: string;
    price: number;
    icon: string;
  };
  checkId: CheckId;
  login: Login;
}
