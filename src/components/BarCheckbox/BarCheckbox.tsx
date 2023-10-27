import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from './BarCheckbox.module.scss';
import basket from '../../assets/images/delete.svg';
import ButtonMUI from '../ButtonMUI/ButtonMUI';
import { Typography } from '@mui/material';
import { CheckBoxOutlineBlankTwoTone } from '@mui/icons-material';

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
                  className={
                    fullDay
                      ? styles.barCheckbox__checkbox_active
                      : styles.barCheckbox__checkbox
                  }
                  color='default'
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                  icon={
                    <CheckBoxOutlineBlankTwoTone
                      style={{
                        background: '#fff',
                        borderRadius: '3px',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  }
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
                  className={
                    parttime
                      ? styles.barCheckbox__checkbox_active
                      : styles.barCheckbox__checkbox
                  }
                  color='default'
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                  icon={
                    <CheckBoxOutlineBlankTwoTone
                      style={{
                        background: '#fff',
                        borderRadius: '3px',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  }
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
                  className={
                    project
                      ? styles.barCheckbox__checkbox_active
                      : styles.barCheckbox__checkbox
                  }
                  color='default'
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                  icon={
                    <CheckBoxOutlineBlankTwoTone
                      style={{
                        background: '#fff',
                        borderRadius: '3px',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  }
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
                  className={
                    nothing
                      ? styles.barCheckbox__checkbox_active
                      : styles.barCheckbox__checkbox
                  }
                  color='default'
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                  icon={
                    <CheckBoxOutlineBlankTwoTone
                      style={{
                        background: '#fff',
                        borderRadius: '3px',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  }
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
                  className={
                    oneYear
                      ? styles.barCheckbox__checkbox_active
                      : styles.barCheckbox__checkbox
                  }
                  color='default'
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                  icon={
                    <CheckBoxOutlineBlankTwoTone
                      style={{
                        background: '#fff',
                        borderRadius: '3px',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  }
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
                  className={
                    threeYear
                      ? styles.barCheckbox__checkbox_active
                      : styles.barCheckbox__checkbox
                  }
                  color='default'
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                  icon={
                    <CheckBoxOutlineBlankTwoTone
                      style={{
                        background: '#fff',
                        borderRadius: '3px',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  }
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
                  className={
                    moreThreeYear
                      ? styles.barCheckbox__checkbox_active
                      : styles.barCheckbox__checkbox
                  }
                  color='default'
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                  icon={
                    <CheckBoxOutlineBlankTwoTone
                      style={{
                        background: '#fff',
                        borderRadius: '3px',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  }
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
          <FormGroup color='default'>
            <FormControlLabel
              className={styles.barCheckbox__box}
              color='default'
              control={
                <Checkbox
                  checked={office}
                  onChange={handleChange}
                  name='office'
                  className={
                    office
                      ? styles.barCheckbox__checkbox_active
                      : styles.barCheckbox__checkbox
                  }
                  color='default'
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                  icon={
                    <CheckBoxOutlineBlankTwoTone
                      style={{
                        background: '#fff',
                        borderRadius: '3px',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  }
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
                  className={
                    gibrid
                      ? styles.barCheckbox__checkbox_active
                      : styles.barCheckbox__checkbox
                  }
                  color='default'
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                  icon={
                    <CheckBoxOutlineBlankTwoTone
                      style={{
                        background: '#fff',
                        borderRadius: '3px',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  }
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
                  className={
                    remote
                      ? styles.barCheckbox__checkbox_active
                      : styles.barCheckbox__checkbox
                  }
                  color='default'
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                  icon={
                    <CheckBoxOutlineBlankTwoTone
                      style={{
                        background: '#fff',
                        borderRadius: '3px',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  }
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
                  className={
                    moscow
                      ? styles.barCheckbox__checkbox_active
                      : styles.barCheckbox__checkbox
                  }
                  color='default'
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                  icon={
                    <CheckBoxOutlineBlankTwoTone
                      style={{
                        background: '#fff',
                        borderRadius: '3px',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  }
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
                  className={
                    moscowArea
                      ? styles.barCheckbox__checkbox_active
                      : styles.barCheckbox__checkbox
                  }
                  color='default'
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                  icon={
                    <CheckBoxOutlineBlankTwoTone
                      style={{
                        background: '#fff',
                        borderRadius: '3px',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  }
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
                  className={
                    SPB
                      ? styles.barCheckbox__checkbox_active
                      : styles.barCheckbox__checkbox
                  }
                  color='default'
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                  icon={
                    <CheckBoxOutlineBlankTwoTone
                      style={{
                        background: '#fff',
                        borderRadius: '3px',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  }
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
        <ButtonMUI variant='contained' type='button' text='Применить' />
      </form>
    </section>
  );
};
export default BarCheckbox;
