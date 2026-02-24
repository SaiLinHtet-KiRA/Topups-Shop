import TermsAndConditions from "@/data/TermsAndConditions";
import "./Document.css";
import Breadcrumbs from "@/components/Navgiation/Breadcrumbs";

export default function Document() {
  return (
    <section className="Document-wrapper">
      <Breadcrumbs path={["Profile", "Terms & Conditions"]} />
      <header>
        <h1>{TermsAndConditions.title}</h1>
        <span>Last Updated: {TermsAndConditions.LastUpdated}</span>
        <p>{TermsAndConditions.greeting}</p>
      </header>
      <section>
        {TermsAndConditions.paragraphs.map(({ title, description }) => (
          <section>
            <h3>{title}</h3>
            <p>{description}</p>
          </section>
        ))}
      </section>
    </section>
  );
}
