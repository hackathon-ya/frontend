import Modal from "../../components/Modals/Modal";
import styles from "./ActiveVacansies.module.scss";
import { useState } from "react";
const ActiveVacancies = () => {
  const [showAuthModal, setShowAuthModal] = useState(true);
  return (
    <Modal
      show={showAuthModal}
      title={"Удалить вакансию?"}
      subtitle={"Вы действительно хотите удалить вакансию?"}
    />
  );
};

export default ActiveVacancies;
