import s from './BlockTitle.module.css'

export const BlockTitle = ({children}) => {
    return <h2 className={s.title}>{children}</h2>
}