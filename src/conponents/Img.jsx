const Img = ({ src, className }) => {
  return (
    <img src={src} className={`${className} img-responsive img-fluid`}></img>
  );
};
export default Img;
