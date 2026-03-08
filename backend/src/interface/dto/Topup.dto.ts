import { CheckId, Login } from "../../model/Topup.model";

export default interface Topup {
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
