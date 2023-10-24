interface Props {
  type: "submit" | "button";
  className?: string;
}
const ButtonIcon = ({ type, className }: Props) => {
  return <button type={type} className={className}></button>;
};

export default ButtonIcon;
