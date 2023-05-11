import clsx from 'clsx'
import styles from './Tag.module.scss'

function Tag(props) {
    return (
        <div className={clsx(styles.promotion, { [styles.vertical]: props.vertical })}>
            {props.list.map((item, index) => (
                <div key={index} className={clsx(styles.contentPromotion, { [styles.odd]: index % 2 === 1 })}>
                    {item}
                </div>
            ))}
        </div>
    )
}

export default Tag
