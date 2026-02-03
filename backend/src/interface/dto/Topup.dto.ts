export default interface Topup {
  game: string;
  package: {
    id: string;
    name: string;
    price: number;
  };
  userId: string;
  zoneId: string;
}
