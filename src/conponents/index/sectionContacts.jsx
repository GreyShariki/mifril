import Section from "../sections/section";
import Img from "../Img";
import home from "/home.jpg";
import facebook from "/facebook.png";
import inst from "/inst.png";
import twitter from "/twitter.png";
import MyButton from "../button/button";
const SectionContacts = () => {
  return (
    <Section
      secondElement={
        <div class="">
          <Img src={home}></Img>
          <MyButton className="d-flex w-100 border-0 ">
            <div class="col-8 align-self-center p-3 ">ACCESSORIES</div>
            <div class="col-4 p-3">
              <h5>
                <small>от </small>
                €3.200
                <small></small>
              </h5>
            </div>
          </MyButton>
        </div>
      }
    >
      <div className="container w-75 m-5 align-self-center p-5">
        <h1>Создадим перевоплощения вместе?</h1>

        <p> Барнаул, Сиродил +123 456 789 000 aboba@gmail.com</p>

        <div>
          <Img src={facebook}></Img>
          <Img src={inst} className="mx-5"></Img>
          <Img src={twitter}></Img>
        </div>
      </div>
    </Section>
  );
};
export default SectionContacts;
