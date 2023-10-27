import styles from './Response.module.scss';
import ok from '../../assets/images/ass-ok.svg'

const Response = () => {
  return (
    <div className={styles.response}>
      <img src={ok} alt="Ok" className={styles.image}/>
      <div className={styles.text__wrapper}>
        <h3 className={styles.header}>Вакансия опубликована</h3>
        <p className={styles.text}>Данные успешно обновлены</p>
      </div>
    </div>
  );
};

export default Response;
