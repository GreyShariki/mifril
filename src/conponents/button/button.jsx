const MyButton = ({ children, className, isActive, onClick, ...props }) => {
  return (
    <button
      {...props}
      className={
        isActive ? `${className} active button` : `${className} button`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default MyButton;
