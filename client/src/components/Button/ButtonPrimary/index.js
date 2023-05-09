import classes from './ButtonPrimary.module.scss'

function ButtonPrimary(props) {
    return (
        <button
            className={`${classes.btn} ${classes[props.className]}`}
            onClick={props.onSubmit}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default ButtonPrimary
