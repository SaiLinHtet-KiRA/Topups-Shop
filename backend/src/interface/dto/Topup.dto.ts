import { CheckId, Login } from "../../model/Topup.model";

export default interface Topup {
  game: string;
  package: {
    id: string;
    name: string;
    price: number;
  };
  checkId: CheckId;
  login: Login;
}
