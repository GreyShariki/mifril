import { useState } from "react";
import SectionRegistration from "./auth/registration.jsx";
import SectionAuth from "./auth/auth.jsx";

const SectionLogin = () => {
  const [tab, setTab] = useState("login");

  return (
    <header className="position-relative bg w-100 m-0 row align-items-center justify-content-center">
      {tab === "login" && <SectionAuth setTab={setTab} />}
      {tab === "register" && <SectionRegistration setTab={setTab} />}
    </header>
  );
};
export default SectionLogin;
