export default interface Receipt {
  name: string;
  banking: string;
  amount: number;
  receipt: File | null;
}
