import { Carousel } from "react-bootstrap";
import Img from "./Img";
const Carousels = ({ images }) => {
  return (
    <Carousel controls={false} indicators={false} fade interval={1000}>
      {Array.from(images).map((image, index) => {
        return (
          <Carousel.Item key={index}>
            <Img src={image}></Img>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default Carousels;
