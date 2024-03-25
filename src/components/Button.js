export const Button = ({ children, classNames }) => {
  return (
    <button className={`rounded-md px-2 py-1 bg-gradient-to-r from-pink to-orange ${classNames}`}>
      {children}
    </button>
  );
}