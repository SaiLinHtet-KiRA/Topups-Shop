import Warining from "../ui/Warining";
import "./Notes.css";

export default function Notes() {
  const notes = [
    "ငွေအစွန်းအထွက်မလွှဲပါနဲ့။",
    "Note ကို shopping ပဲရေးပါ။",
    "လွှဲပြီး 3နာရီအတွင်း ငွေဖြည့်သွင်းမှုများသာ လက်ခံပါသည်။",
    "လွှဲပြီး 3နာရီကျော်မှ တင်သော orderများ cancelပါမယ်။ ငွေပြန်မအမ်းပါ။",
    "ပြေစာထဲက amountနဲ့ boxထဲ‌ဖြည့်ထားတဲ့amountမတူပါက boxထဲဖြည့်ထားတဲ့ထဲကအတိုင်းပဲဖြည့်ပေးပါမယ်။ အပိုငွေပြန်မအမ်းပါ။",
  ];
  const warining =
    "စည်းကမ်းနဲ့မညီပါ၍ ပြဿနာတစ်စုံတရာဖြစ်ပါက ငွေလုံးဝ ပြန်မအမ်းပါ။";
  return (
    <section className="note-wrapper">
      <header>Need To Know</header>
      <ul className="note-container">
        {notes.map((note, i) => (
          <li className={"note" + i}>{note}</li>
        ))}
      </ul>
      <Warining text={warining} />
    </section>
  );
}
