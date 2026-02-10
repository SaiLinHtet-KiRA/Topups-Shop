import type Game from "@/interface/Game";
import { useForm, type UseFormRegister, type FieldPath } from "react-hook-form";
import "./GameForm.css";
import { useUpdateGameMutation } from "@/redux/api/game";
export default function GameForm(game: Game) {
  const { handleSubmit, register } = useForm<Game>({
    defaultValues: game,
  });
  const [updaetGame] = useUpdateGameMutation();

  const SubmitHandler = (body: Game) => {
    console.log(body);
    updaetGame({ id: game._id, body });
  };
  return (
    <form
      onSubmit={handleSubmit(SubmitHandler)}
      className="game-info-container wrapper game-info-form"
    >
      <section>
        <header>
          <span>Packages</span>
        </header>
        <section className="package-section-container">
          {game.packages?.map(({ name, packages }, index) => (
            <section className="package-container">
              <header>
                <span>{name}</span>
              </header>
              <section className="package-wrapper">
                {packages.map(({ new_price, name, icon }, index2) => (
                  <label htmlFor={name} className="package-card">
                    <div className="package-info">
                      <header>
                        <InputField
                          type="number"
                          value={new_price}
                          register={register}
                          name={`packages.${index}.packages.${index2}.new_price`}
                        />
                        MMk
                      </header>
                      <span>{name}</span>
                    </div>
                    <span className="package-img-container">
                      <img src={icon} alt="" />
                    </span>
                  </label>
                ))}
              </section>
            </section>
          ))}
        </section>
      </section>
      <button className="update-btn">Update</button>
    </form>
  );
}
interface Props {
  name: FieldPath<Game>;
  type: "text" | "number";
  register: UseFormRegister<Game>;
  value: string | number;
}

const InputField = ({ name, type, register, value }: Props) => {
  return (
    <input
      className="package-input"
      style={{ width: value.toString.length + 5 + "ch" }}
      type={type}
      {...register(name, {
        value,
      })}
    />
  );
};
