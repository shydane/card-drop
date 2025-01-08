import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          number={index + 1}
          curOpen={curOpen}
          onOpen={setIsOpen}
          {...faq}
        />
      ))}
    </div>
  );
}

export default Accordion;
