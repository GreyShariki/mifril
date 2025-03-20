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
import OrderList from "./conponents/pages/buys.jsx";
import CartSection from "./conponents/pages/userShop.jsx";

function App() {
  const location = useLocation();
  const [tab, setTab] = useState("/");
  let token = document.cookie;
  useEffect(() => {
    const path = location.pathname.slice(1);
    if (
      path === "" ||
      ["shop", "faq", "profile", "cart", "shop1"].includes(path)
    ) {
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
        {tab === "cart" && <CartSection />}
        {tab === "profile" && (token ? <Profile /> : <SectionLogin />)}
        {tab === "shop1" && (token ? <OrderList /> : <SectionLogin />)}
        {tab === "notFound" && <NotFound />}
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
