import type { Packages } from "./Packages";

export default interface Game {
  _id: string;
  name: string;
  icon: string;
  about: string;
  check_id?: CheckId;
  login?: Login;
  palyStore: string;
  appStore: string;
  packages: Packages[];
}
export interface CheckId {
  url: string;
  userID: boolean;
  zoneID: boolean;
  server: string[];
}
export interface Login {
  username: string;
  password: string;
  backupCode: string;
}
