import logo from "/1.png";
import Img from "./conponents/Img";
const Footer = () => {
  return (
    <footer class="footer w-100">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
          <div class="col mb-4">
            <a href="/" class="d-flex align-items-center mb-3">
              <Img src={logo} alt="Логотип"></Img>
            </a>
            <p class="text-muted">&copy; 2022 Company, Inc</p>
          </div>
          <div class="col mb-4"></div>
          <div class="col mb-4">
            <h5>ГЛАВНАЯ</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Главная
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#costum" class="nav-link p-0 text-muted">
                  О косплее
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#karta" class="nav-link p-0 text-muted">
                  Карта
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#contact" class="nav-link p-0 text-muted">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div class="col mb-4">
            <h5>КАТАЛОГ</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div class="col mb-4">
            <h5>ГЕНШИН</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Геншин
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Геншин
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Геншин
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Геншин
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Геншин
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
