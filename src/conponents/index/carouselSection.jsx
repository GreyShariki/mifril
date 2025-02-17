import Carousels from "../Carousels";
import we from "/we.jpg";
import we4 from "/we4.jpg";
import we5 from "/we5.jpg";
import vid from "/vid.jpg";
import we6 from "/we6.jpg";
import we7 from "/we7.jpg";

import Section from "../sections/section";
const CarouselSection = () => {
  return (
    <Section
      fluid={true}
      secondElement={<Carousels images={[vid, we6, we7]} />}
    >
      <Carousels images={[we, we4, we5]} />
    </Section>
  );
};
export default CarouselSection;
