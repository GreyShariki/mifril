import MyNavbar from "./conponents/nav/navbar.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./conponents/pages/index.jsx";
import Footer from "./footer.jsx";
import SectionFaq from "./conponents/faq/faqstr.jsx";
import { useState, useEffect } from "react";
import SectionShop from "./shop/sectionShop.jsx";
import { BrowserRouter, useLocation } from "react-router-dom";
import SectionLogin from "./conponents/login.jsx";
import { NotFound } from "./conponents/pages/notFound.jsx";
import { Profile } from "./conponents/pages/profile.jsx";

function App() {
  const location = useLocation();
  const [tab, setTab] = useState("/");

  useEffect(() => {
    const path = location.pathname.slice(1);
    if (path === "" || ["shop", "faq", "profile", "cabinet"].includes(path)) {
      setTab(path || "/");
    } else {
      setTab("notFound");
    }
  }, [location]);

  return (
    <>
      <MyNavbar onClick={(current) => setTab(current)} />
      <main>
        {tab === "/" && <Index />}
        {tab === "shop" && <SectionShop />}
        {tab === "faq" && <SectionFaq />}
        {tab === "profile" && <SectionLogin />}
        {tab === "notFound" && <NotFound />}
        {tab === "cabinet" && <Profile />}
        {tab === "out" && <Index />}
      </main>
      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
