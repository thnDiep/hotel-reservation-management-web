import classes from './ButtonPrimary.module.scss'

function ButtonPrimary(props) {
    const className = props.className
    return (
        <button className={`${classes.btn} ${classes[props.className]}`} onClick={props.onSubmid}>{props.children}
        </button>
    )
}

export default ButtonPrimary
