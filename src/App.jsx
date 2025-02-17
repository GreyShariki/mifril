import MyNavbar from "./conponents/nav/navbar.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from "./conponents/header/myHeader.jsx";
import SectionCosplay from "./conponents/sectionCosplay.jsx";
import SectionPhoto from "./conponents/sectionPhoto.jsx";
import SectionMap from "./conponents/sectionMap.jsx";
function App() {
  return (
    <>
      <MyNavbar />
      <MyHeader />
      <main>
        <SectionCosplay />
        <SectionPhoto />
        <SectionMap />
      </main>
    </>
  );
}

export default App;
