import s from './Button.module.css'

export const Button = ({children}) => {
    return (
        <button className={s.button} type='button'>{children}</button>
    )
}