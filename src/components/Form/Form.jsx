import s from './Form.module.css'
import {useState} from "react";
import {Button} from "../elements/Button/Button";
import arrow from '../../images/arrow.svg'
import {BlockTitle} from "../elements/BlockTitle/BlockTitle";

export const Form = () => {
  return (
    <>
      <BlockTitle>Оставьте заявку на консультацию</BlockTitle>
      <form className={s.form}>
        <input className={s.input} type='text' name='name' placeholder='Имя'/>
        <input className={s.input} type='text' name='phone' placeholder='Телефон'/>
        <input className={s.input} type='email' name='email' placeholder='Email'/>
        <div className={s.checkbox}>
          <input className={s.checkboxInput} type="checkbox" id="checkbox"/>
          <label className={s.checkboxLabel} htmlFor="checkbox">
            Я согласен на обработку персональных данных
          </label>
        </div>
        <Button>Получить консультацию
          <img src={arrow} alt='arrow'/>
        </Button>
      </form>
    </>
  )
}