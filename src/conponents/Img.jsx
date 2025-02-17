const Img = ({ src, className }) => {
  return (
    <img
      src={src}
      className={`${className} mt-5 img-responsive img-fluid`}
    ></img>
  );
};
export default Img;
