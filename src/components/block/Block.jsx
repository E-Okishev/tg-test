import s from './Block.module.css'

export function Block({title, description, color='blue'}){
    return (
        <>
            <div className={s.block} style={{'background': color}}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>
    )
}