import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem key={index} number={index + 1} {...faq} />
      ))}
    </div>
  );
}

export default Accordion;
