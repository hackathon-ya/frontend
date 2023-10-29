interface Props {
  type: 'submit' | 'button';
  className?: string;
  openModal?: () => void;
}
const ButtonIcon = ({ type, className, openModal }: Props) => {
  return (
    <button type={type} className={className} onClick={openModal}></button>
  );
};

export default ButtonIcon;
