interface Props {
  type: "submit" | "button";
}
const ButtonIcon = ({ type }: Props) => {
  return <button type={type}></button>;
};

export default ButtonIcon;
