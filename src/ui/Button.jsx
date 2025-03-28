import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "duration-3 text-sm focus:ring-yellow-200 inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 ring-yellow-300 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "duration-3 text-sm  inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 ring-yellow-300 transition-colors hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 focus:ring-stone-200 ",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
