import MyNavbar from "./conponents/nav/navbar.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from "./conponents/header/myHeader.jsx";
import Index from "./conponents/index.jsx";
import Footer from "./footer.jsx";
function App() {
  return (
    <>
      <MyNavbar />
      <MyHeader />
      <main>
        <Index></Index>
      </main>
      <Footer />
    </>
  );
}

export default App;
