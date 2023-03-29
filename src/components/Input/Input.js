import React from 'react'
import classes from './Input.module.scss'

const Input = (props) => {
    return (
        <div className={classes.form__sub__part}>
            <label>{props.label}</label>
            <div className={classes.search}>
                {props.children}
                <div className={classes.absolute}></div>
                {props.check && (
                    <span className={classes.btnDown} aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M18 9.45c0 .2-.078.39-.22.53l-5 5a1.08 1.08 0 0 1-.78.32 1.1 1.1 0 0 1-.78-.32l-5-5a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0L12 13.64l4.72-4.72a.74.74 0 0 1 1.06 0 .73.73 0 0 1 .22.53zm-5.72 4.47zm-.57 0z"></path>
                        </svg>
                    </span>
                )}
            </div>
        </div>
    )
}
export default Input
