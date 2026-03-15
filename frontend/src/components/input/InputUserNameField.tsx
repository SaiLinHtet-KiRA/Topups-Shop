import ShowToast from "@/helper/ShowToast";
import { useUpdateAccountInfoMutation } from "@/redux/api/auth";
import { useAppSelector } from "@/redux/store";
import { useState } from "react";
import { motion } from "motion/react";
import "./InputUserNameField.css";

export default function InputUserNameField() {
  const { username } = useAppSelector(({ user }) => user);
  const [userName, setUserName] = useState<string>("");
  const [updateUserInfo] = useUpdateAccountInfoMutation();
  return (
    <div className="input-user-field">
      <span className="input-container">
        <input
          defaultValue={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </span>
      {userName && username != userName && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className=""
          onClick={async () => {
            try {
              await updateUserInfo({ username: userName }).unwrap();

              ShowToast("success", "Successfully changed");
            } catch (error) {
              ShowToast("error", "Failed to change user name");
            }
          }}
        >
          Change
        </motion.button>
      )}
    </div>
  );
}
