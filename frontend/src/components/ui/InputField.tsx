import { useSearchParams } from "react-router";

export interface InputProps {
  type: string;
  htmlFor: string;
  id: string;
  placeHolder: string;
}

export default function InputField({
  htmlFor,
  id,
  placeHolder,
  type,
}: InputProps) {
  const [getSearchParams, setSearchParams] = useSearchParams();
  const value = getSearchParams.get(htmlFor);
  return (
    <label htmlFor={htmlFor} id={id} className="input-container">
      <input
        type={type}
        id={htmlFor}
        placeholder={placeHolder}
        required
        value={value || ""}
        onChange={(e) =>
          setSearchParams((prevParams) => {
            prevParams.set(`${htmlFor}`, e.target.value);
            return prevParams;
          })
        }
      />
    </label>
  );
}
