import Accordion from "./components/Accordion";
import "./style.css";

const faqs = [
  {
    question: "apakah produk ini memiliki garansi?",
    answer: "Ya, produk ini memiliki garansi 1 tahun.",
  },
  {
    question: "apakah produk ini dapat dikembalikan?",
    answer:
      "Ya, produk ini dapat dikembalikan dengan syarat dan ketentuan yang berlaku.",
  },
  {
    question: "apakah produk ini dapat dipesan secara online?",
    answer:
      "Ya, produk ini dapat dipesan secara online melalui store resmi di beberapa platform online yang ada.",
  },
];

function App() {
  return (
    <>
      <Accordion data={faqs} />
    </>
  );
}

export default App;
