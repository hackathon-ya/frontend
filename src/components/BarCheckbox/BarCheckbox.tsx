import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from './BarCheckbox.module.scss';
import basket from '../../assets/images/delete.svg';
import ButtonMUI from '../ButtonMUI/ButtonMUI';
import { Typography } from '@mui/material';

const BarCheckbox = () => {
  const [state, setState] = React.useState({
    fullDay: false,
    parttime: false,
    project: false,
    nothing: false,
    oneYear: false,
    threeYear: false,
    moreThreeYear: false,
    office: false,
    gibrid: false,
    remote: false,
    moscow: false,
    moscowArea: false,
    SPB: false,
  });
  const {
    fullDay,
    parttime,
    project,
    nothing,
    oneYear,
    threeYear,
    moreThreeYear,
    office,
    gibrid,
    remote,
    moscow,
    moscowArea,
    SPB,
  } = state;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <section className={styles.barCheckbox}>
      <form>
        <div className={styles.barCheckbox__header}>
          <h2 className={styles.barCheckbox__header_title}>Фильтры</h2>
          <button className={styles.barCheckbox__header_button}>
            <img className={styles.barCheckbox__header_image} src={basket} />
            Очистить фильтры
          </button>
        </div>
        <div className={styles.barCheckbox__conteiner}>
          <h3 className={styles.barCheckbox__subtitle}>График работы</h3>
          <FormGroup>
            <FormControlLabel
              className={styles.barCheckbox__box}
              control={
                <Checkbox
                  checked={fullDay}
                  onChange={handleChange}
                  name='fullDay'
                  className={styles.barCheckbox__checkbox}
                />
              }
              label={
                <Typography className={styles.typography}>
                  Полный день
                </Typography>
              }
            />
            <FormControlLabel
              className={styles.barCheckbox__box}
              control={
                <Checkbox
                  checked={parttime}
                  onChange={handleChange}
                  name='parttime'
                  className={styles.barCheckbox__checkbox}
                />
              }
              label={
                <Typography className={styles.typography}>
                  Частичная занятость
                </Typography>
              }
            />
            <FormControlLabel
              className={styles.barCheckbox__box}
              control={
                <Checkbox
                  checked={project}
                  onChange={handleChange}
                  name='project'
                  className={styles.barCheckbox__checkbox}
                />
              }
              label={
                <Typography className={styles.typography}>
                  Проектная работа
                </Typography>
              }
            />
          </FormGroup>
        </div>
        <div className={styles.barCheckbox__conteiner}>
          <h3 className={styles.barCheckbox__subtitle}>Опыт работы</h3>
          <FormGroup>
            <FormControlLabel
              className={styles.barCheckbox__box}
              control={
                <Checkbox
                  checked={nothing}
                  onChange={handleChange}
                  name='nothing'
                  className={styles.barCheckbox__checkbox}
                />
              }
              label={
                <Typography className={styles.typography}>Не важен</Typography>
              }
            />
            <FormControlLabel
              className={styles.barCheckbox__box}
              control={
                <Checkbox
                  checked={oneYear}
                  onChange={handleChange}
                  name='oneYear'
                  className={styles.barCheckbox__checkbox}
                />
              }
              label={
                <Typography className={styles.typography}>до 1 года</Typography>
              }
            />
            <FormControlLabel
              className={styles.barCheckbox__box}
              control={
                <Checkbox
                  checked={threeYear}
                  onChange={handleChange}
                  name='threeYear'
                  className={styles.barCheckbox__checkbox}
                />
              }
              label={
                <Typography className={styles.typography}>
                  от 1 до 3 лет
                </Typography>
              }
            />
            <FormControlLabel
              className={styles.barCheckbox__box}
              control={
                <Checkbox
                  checked={moreThreeYear}
                  onChange={handleChange}
                  name='moreThreeYear'
                  className={styles.barCheckbox__checkbox}
                />
              }
              label={
                <Typography className={styles.typography}>
                  больше 3 лет
                </Typography>
              }
            />
          </FormGroup>
        </div>
        <div className={styles.barCheckbox__conteiner}>
          <h3 className={styles.barCheckbox__subtitle}>Формат работы</h3>
          <FormGroup>
            <FormControlLabel
              className={styles.barCheckbox__box}
              control={
                <Checkbox
                  checked={office}
                  onChange={handleChange}
                  name='office'
                  className={styles.barCheckbox__checkbox}
                />
              }
              label={
                <Typography className={styles.typography}>Офис</Typography>
              }
            />
            <FormControlLabel
              className={styles.barCheckbox__box}
              control={
                <Checkbox
                  checked={gibrid}
                  onChange={handleChange}
                  name='gibrid'
                  className={styles.barCheckbox__checkbox}
                />
              }
              label={
                <Typography className={styles.typography}>Гибридный</Typography>
              }
            />
            <FormControlLabel
              className={styles.barCheckbox__box}
              control={
                <Checkbox
                  checked={remote}
                  onChange={handleChange}
                  name='remote'
                  className={styles.barCheckbox__checkbox}
                />
              }
              label={
                <Typography className={styles.typography}>Удаленный</Typography>
              }
            />
          </FormGroup>
        </div>
        <div className={styles.barCheckbox__conteiner}>
          <h3 className={styles.barCheckbox__subtitle}>Регион</h3>
          <FormGroup>
            <FormControlLabel
              className={styles.barCheckbox__box}
              control={
                <Checkbox
                  checked={moscow}
                  onChange={handleChange}
                  name='moscow'
                  className={styles.barCheckbox__checkbox}
                />
              }
              label={
                <Typography className={styles.typography}>Москва</Typography>
              }
            />
            <FormControlLabel
              className={styles.barCheckbox__box}
              control={
                <Checkbox
                  checked={moscowArea}
                  onChange={handleChange}
                  name='moscowArea'
                  className={styles.barCheckbox__checkbox}
                />
              }
              label={
                <Typography className={styles.typography}>
                  Московская область
                </Typography>
              }
            />
            <FormControlLabel
              className={styles.barCheckbox__box}
              control={
                <Checkbox
                  checked={SPB}
                  onChange={handleChange}
                  name='SPB'
                  className={styles.barCheckbox__checkbox}
                />
              }
              label={
                <Typography className={styles.typography}>
                  Санкт-Петербург
                </Typography>
              }
            />
          </FormGroup>
        </div>
        <ButtonMUI variant='contained' text='Применить' />
      </form>
    </section>
  );
};
export default BarCheckbox;
