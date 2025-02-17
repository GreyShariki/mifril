import MyButton from "../button/button";

const MyHeader = () => {
  return (
    <header className="position-relative bg w-100">
      <div className="container position-absolute top-0 end-0">
        <h1 className="text-light text-end m-5">
          Поменяй своё обличие, путник
        </h1>
        <h4 className="text-light text-end m-5">
          Твой путь к безупречному косплею С любовью, Мифрил ♥
        </h4>
      </div>
      <MyButton className={"position-absolute start-0 bottom-0 m-5"}>
        <h3>Каталог</h3>
      </MyButton>
    </header>
  );
};
export default MyHeader;
