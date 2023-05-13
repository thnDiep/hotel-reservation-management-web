import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './FooterPaging.module.scss'
import clsx from 'clsx'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const FooterPaging = ({ curPage, handleChangePage, totalPage }) => {
    function handleClickPrev() {
        if (curPage <= 1) return

        handleChangePage(curPage - 1)
    }
    function handleClickNext() {
        if (curPage >= totalPage) return

        handleChangePage(curPage + 1)
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.dataTables_info}>
                {curPage}/{totalPage || 1}
            </div>
            <div className={styles.dataTables_paginate}>
                <div
                    className={clsx(styles.paginate_button, { [styles.disabled]: curPage <= 1 })}
                    onClick={handleClickPrev}
                >
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </div>
                <div className={clsx(styles.paginate_button, styles.current)}>{curPage}</div>
                <div
                    className={clsx(styles.paginate_button, { [styles.disabled]: curPage >= totalPage })}
                    onClick={handleClickNext}
                >
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                </div>
            </div>
        </div>
    )
}
export default FooterPaging
