import styles from './FooterPaging.module.scss'
const FooterPaging = () => {
    return (
        <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
            <div className={styles.dataTables_info}>Showing 1 to 6 of 6 entries</div>
            <div className={`${styles.dataTables_paginate} ${styles.paging_simple_numbers} mb-0`}>
                <a class={`${styles.paginate_button} `}>
                    <i class="fa fa-angle-double-left"></i> Previous
                </a>
                <span>
                    <a class={`${styles.paginate_button}  ${styles.current} `} href="/react/demo/room-list">
                        1
                    </a>
                </span>
                <a class={`${styles.paginate_button} `}>
                    Next <i class="fa fa-angle-double-right" />
                </a>
            </div>
        </div>
    )
}
export default FooterPaging
