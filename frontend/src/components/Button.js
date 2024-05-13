export const Button = ({ children, classNames, type }) => {
  return (
    <button type={type} className={`rounded-md px-2 py-1 bg-gradient-to-r from-pink to-orange hover:scale-105 transition-transform duration-300 ${classNames}`}>
      {children}
    </button>
  );
}
