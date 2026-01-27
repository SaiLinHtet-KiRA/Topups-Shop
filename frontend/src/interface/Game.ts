import type { Packages } from "./Packages";

export default interface Game {
  _id: string;
  name: string;
  icon: string;
  about: string;
  check_id?: CheckId;
  palyStore: string;
  appStore: string;
  packages?: Packages[];
}
interface CheckId {
  url: string;
  userID: boolean;
  zoneID: boolean;
}
