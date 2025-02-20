import Faq from "./faq";
import back from "/back3.jpg";
import DefaultHeader from "../header/headerDefault";
const SectionFaq = () => {
  return (
    <>
      <DefaultHeader img={back}>FAQ</DefaultHeader>
      <Faq />
    </>
  );
};
export default SectionFaq;
