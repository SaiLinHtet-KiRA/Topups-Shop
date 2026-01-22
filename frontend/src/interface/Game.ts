import type { Packages } from "./Packages";

export default interface Games {
  name: string;
  icon: string;
  about: string;
  check_id_url?: string;
  palyStore: string;
  appStore: string;
  packages?: Packages[];
}
