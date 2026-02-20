export default async function CopyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  } catch (err) {
    console.log(err);
    alert("Error");
  }
}
