import icons from "./icons";

const Icon = ({ children: icon, className, white }) => {
  const name = icon.toLowerCase() + (white ? "White" : "");
  const src = icons?.[name];

  if (src) {
    return <img className={className} title={icon} src={src} alt={icon} />;
  }

  return null;
};

export default Icon;
