import MyNavbar from "./conponents/nav/navbar.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from "./conponents/header/myHeader.jsx";
import Index from "./conponents/index.jsx";
import Footer from "./footer.jsx";
import SectionFaq from "./conponents/faq/faqstr.jsx";
import { useState } from "react";
import SectionShop from "./shop/sectionShop.jsx";
import SectionRegister from "./conponents/register.jsx";
function App() {
  const [tab, setTab] = useState("index");

  return (
    <>
      <MyNavbar onClick={(current) => setTab(current)} />
      {tab === "index" && <MyHeader />}

      <main>
        {tab === "index" && <Index></Index>}
        {tab === "shop" && <SectionShop></SectionShop>}
        {tab === "faq" && <SectionFaq></SectionFaq>}
        {tab === "profile" && <SectionRegister />}
      </main>
      <Footer />
    </>
  );
}

export default App;
