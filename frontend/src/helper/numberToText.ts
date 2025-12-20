export default function numberToText(number: number) {
  const numString = number.toString();
  if (numString.length < 3) {
    return number;
  }
  let string = "";
  for (let i = 0; i <= numString.length - 4; i++) {
    string = string + numString[i];
  }
  return (
    string +
    (numString[numString.length - 3] != "0" ? "." + numString[1] : "") +
    "k"
  );
}
