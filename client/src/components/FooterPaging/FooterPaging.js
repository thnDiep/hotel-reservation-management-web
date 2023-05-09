import styles from './FooterPaging.module.scss'
const FooterPaging = () => {
    return (
        <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
            <div className={styles.dataTables_info}>Showing 1 to 6 of 6 entries</div>
            <div className={`${styles.dataTables_paginate} ${styles.paging_simple_numbers} mb-0`}>
                <p class={`${styles.paginate_button} `}>
                    <i class="fa fa-angle-double-left"></i> Previous
                </p>
                <span>
                    <p class={`${styles.paginate_button}  ${styles.current} `} >
                        1
                    </p>
                </span>
                <p class={`${styles.paginate_button} `}>
                    Next <i class="fa fa-angle-double-right" />
                </p>
            </div>
        </div>
    )
}
export default FooterPaging
