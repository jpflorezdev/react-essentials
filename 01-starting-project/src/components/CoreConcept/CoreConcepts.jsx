import CoreConcept from "../CoreConcepts/CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import Section from "../Section/Section";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((coreConcept) => (
          <CoreConcept key={coreConcept.title} {...coreConcept} />
        ))}
      </ul>
    </Section>
  );
}
