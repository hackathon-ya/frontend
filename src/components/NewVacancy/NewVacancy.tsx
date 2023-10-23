import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './NewVacancy.module.scss';

interface Vacancy {
    name: string
    company: string
    city: string
    cash: number
    skills: string
    textVacancy: string
    experience: string
    work: string
    formatWork: string
}

const NewVacancy = () => {
    const {handleSubmit} = useForm<Vacancy>();

    const  onSubmit:SubmitHandler<Vacancy> = (data) => {
        alert(data)
    }

    return(
        <section className={styles.NewVacancy}>
            <button className={styles.NewVacancy__button_vacancy}><Link to='' className={styles.NewVacancy__link}>Назад</Link></button>
            <form className={styles.NewVacancy__form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.NewVacancy__title}>Новая вакансия</h2>
                <h3 className={styles.NewVacancy__subtitle}>информация о вакансии</h3>
                <h4  className={styles.NewVacancy__input_title}>Название вакансии</h4>
                <div  className={styles.NewVacancy__input}></div>
                <h4  className={styles.NewVacancy__input_title}>Компания</h4>
                <div  className={styles.NewVacancy__input}></div>
                <h4  className={styles.NewVacancy__input_title}>Город</h4>
                <div  className={styles.NewVacancy__input}></div>
                <h4  className={styles.NewVacancy__input_title}>Зарплата</h4>
                <div className={styles.NewVacancy__input_moneys}>
                <div  className={styles.NewVacancy__input_money}></div><div className={styles.NewVacancy__input_money}></div>
                </div>
                <h4  className={styles.NewVacancy__input_title}>Ключевые навыки</h4>
                <div  className={styles.NewVacancy__input}></div>
                <div  className={styles.skills__list}>
                    <div className={styles.skills__item}>навык 1</div>
                    <div className={styles.skills__item}>навык 1</div>
                    <div className={styles.skills__item}>навык 1</div>
                    <div className={styles.skills__item}>навык 1</div>
                </div>
                <h4  className={styles.NewVacancy__input_title}>Описание вакансии</h4>
                <div  className={styles.NewVacancy__input_text}></div>
                <h3  className={styles.NewVacancy__wishes}>Пожелания к соискателю</h3>
                <h4  className={styles.NewVacancy__input_title}>Опыт работы</h4>
                <div  className={styles.NewVacancy__input}></div>
                <h4  className={styles.NewVacancy__input_title}>Занятость</h4>
                <div  className={styles.NewVacancy__input}></div>
                <h4  className={styles.NewVacancy__input_title}>Формат работы</h4>
                <div  className={styles.NewVacancy__input}></div>
                <div  className={styles.NewVacancy__buttons}>
                    <button  className={styles.NewVacancy__button_published}>Сохранить и опубликовать</button>
                    <button  className={styles.NewVacancy__button_save}>Сохранить черновик</button>
                </div>
            </form>
        </section>
    )
}

export default NewVacancy;