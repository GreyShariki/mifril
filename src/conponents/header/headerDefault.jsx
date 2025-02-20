const DefaultHeader = ({ img, children }) => {
  return (
    <header
      className="headerDefault w-100"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(20, 20, 20, 0.6) 78.8%, #141414 100%), url(${img})`,
      }}
    >
      <div className="container col d-flex justify-content-center align-items-center h-100">
        <h1 className="text-light fs-1">{children}</h1>
      </div>
    </header>
  );
};
export default DefaultHeader;
