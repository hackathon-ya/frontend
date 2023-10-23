import suitcase from '../../assets/suitcase.svg';
import strelka from '../../assets/Vector.svg';
import styles from './Vacancy.module.scss';

const Vacancy = () => {
    return(
        <section className={styles.vacancy}>
            <div className={styles.vacancy__header}>
                <div className={styles.vacancy__box}>
                    <div className={styles.vacancy__header_promo}>
                        <h3 className={styles.vacancy__header_title}>Интернет-маркетолог</h3>
                        <h4 className={styles.vacancy__header_subtitle}>80 000 - 120 000 ₽</h4>
                    </div>
                    <div className={styles.vacancy__header_icons}>
                        <button className={styles.vacancy__header_icon_edit}></button>
                        <button className={styles.vacancy__header_icon_delete}></button>
                    </div>
                </div>
                <p className={styles.vacancy__header_text}>ООО название компании</p>
                <p className={styles.vacancy__header_text}>Москва</p>
                <div className={styles.vacancy__header_expiriencs}>
                    <img src={suitcase} className={styles.vacancy__header_icon} alt=''/>
                    <p className={styles.vacancy__header_text}>Опыт о 1 года до 3 лет</p>
                </div>

                <span className={styles.vacancy__border}></span>



                <div className={styles.vacancy__info}>
                <div className={styles.vacancy__info_box}>
                    <h4 className={styles.vacancy__info_title}>Обязанности</h4>
                    <ul className={styles.vacancy__list}>
                        <li>обязанность первая, самая важная, основная</li>
                        <li>вторая обязанность такая же важная как и первая</li>
                        <li>третья обязанность не менее важная, чем все остальные</li>
                    </ul>
                    <h4 className={styles.vacancy__info_title}>Условия</h4>
                    <ul className={styles.vacancy__list}>
                        <li>обязанность первая, самая важная, основная</li>
                        <li>вторая обязанность такая же важная как и первая</li>
                        <li>третья обязанность не менее важная, чем все остальные</li>
                    </ul>
                    <h4 className={styles.vacancy__info_title}>Пожелания</h4>
                    <ul className={styles.vacancy__list}>
                        <li>пожелание к кандидату первое</li>
                        <li>пожелание к кандидату второе</li>
                        <li>пожелание к кандидату последнее</li>
                    </ul>
                    <h4 className={styles.vacancy__info_title}>Ключевые навыки</h4>
                    <div className={styles.vacancy__info_skills}>
                        <div className={styles.vacancy__info_skill}>Навык 1</div>
                        <div className={styles.vacancy__info_skill}>Навык 1</div>
                        <div className={styles.vacancy__info_skill}>Навык 1</div>
                        <div className={styles.vacancy__info_skill}>Навык 1</div>
                        <div className={styles.vacancy__info_skill}>Навык 1</div>
                        <div className={styles.vacancy__info_skill}>Навык 1</div>
                        <div className={styles.vacancy__info_skill}>Навык 1</div>
                        <div className={styles.vacancy__info_skill}>Навык 1</div>
                        <div className={styles.vacancy__info_skill}>Навык 1</div>
                        <div className={styles.vacancy__info_skill}>Навык 1</div>
                        <div className={styles.vacancy__info_skill}>Навык 1</div>
                        <div className={styles.vacancy__info_skill}>Навык 1</div>
                    </div>
                    <h4 className={styles.vacancy__info_title}>Дополнительная информация</h4>
                    <p className={styles.vacancy__info_text}>Будем рады видеть вас в нашей команде!</p>
                </div>
            </div>



                <div className={styles.vacancy__header_buttons}>
                    <div className={styles.vacancy__header_show}>
                        <button className={styles.vacancy__header_button_response}>+ 5 новых откликов</button>
                        <button className={styles.vacancy__header_button_condidats}>Показать 420 кандидатов</button>
                    </div>
                    <button className={styles.vacancy__header_button_close}>Закрыть вакансию</button>
                </div>
                <button className={styles.vacancy__close}><img className={styles.vacancy__close_image} src={strelka}/>Свернуть</button>
            </div>

            
        </section>
    )
}

export default Vacancy;