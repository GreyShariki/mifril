import SectionCosplay from "../index/sectionCosplay.jsx";
import SectionPhoto from "../index/sectionPhoto.jsx";
import SectionMap from "../index/sectionMap.jsx";
import CarouselSection from "../index/carouselSection.jsx";
import SectionContacts from "../index/sectionContacts.jsx";
import MyHeader from "../header/myHeader.jsx";
const Index = () => {
  return (
    <>
      <MyHeader />
      <main>
        <SectionCosplay />
        <SectionPhoto />
        <SectionMap />
        <CarouselSection />
        <SectionContacts />
      </main>
    </>
  );
};
export default Index;
