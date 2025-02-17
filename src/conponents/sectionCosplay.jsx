import Section from "./sections/section";
import Img from "./Img";
import maska from "/maska.jpg";
const SectionCosplay = () => {
  return (
    <Section secondElement={<Img src={maska}></Img>}>
      <>
        <h3>"Не просто костюм"</h3>
        <p>
          Косплей — это больше, чем просто наряд. Это воплощение любимого
          персонажа в реальность, искусство перевоплощения, где каждая деталь
          имеет значение. Это возможность на время стать героем, которого вы
          всегда восхищались, будь то отважный воин, мудрый волшебник, или
          загадочный злодей.
        </p>
      </>
    </Section>
  );
};
export default SectionCosplay;
