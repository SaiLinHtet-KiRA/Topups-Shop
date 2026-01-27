import type { Packages } from "@/interface/Packages";
import "./PackageSection.css";
import PackageCard from "../Card/PackageCard";

export default function PackageSection({ name, packages }: Packages) {
  return (
    <section className="package-container">
      <header>
        <span>{name}</span>
      </header>
      <section className="package-wrapper">
        {packages.map((info) => (
          <PackageCard {...info} />
        ))}
      </section>
    </section>
  );
}
