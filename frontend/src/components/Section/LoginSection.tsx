import type { Login } from "@/interface/Game";
import InputField from "../ui/InputField";
import "./LoginSection.css";
import { Youtube } from "@/svg";

export default function LoginSection({
  username,
  password,
  backupCode,
}: Login) {
  return (
    <section>
      <header>
        <span>1</span>
        <span>Enter Account Details</span>
      </header>
      <div className="check-id-contaier">
        {username && (
          <InputField
            type="text"
            htmlFor="username"
            id="input-username-container"
            placeHolder="Username"
          />
        )}
        {password && (
          <InputField
            type="text"
            htmlFor="password"
            id="input-password-container"
            placeHolder="Password"
          />
        )}
        {backupCode && (
          <InputField
            type="text"
            htmlFor="backupCode"
            id="input-backup-code-container"
            placeHolder="Backup Code"
          />
        )}
        <span className="result"></span>
      </div>
      <p className="note-link">
        Backup Codeထုတ်နည်း -{" "}
        <a
          href="https://youtu.be/wUhofWNIPrw?si=jksnqJApVMrWmomF"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube className="svg-xl" />
        </a>
      </p>
    </section>
  );
}
