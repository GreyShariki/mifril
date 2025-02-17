const MyButton = ({ children, className, onClick, ...props }) => {
  return (
    <button {...props} className={`${className} button`} onClick={onClick}>
      {children}
    </button>
  );
};
export default MyButton;
