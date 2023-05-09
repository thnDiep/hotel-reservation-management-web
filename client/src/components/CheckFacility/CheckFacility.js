import { Checkbox, FormControlLabel } from '@material-ui/core'
import styles from './CheckFacility.module.scss'
import 'animate.css';
const CheckFacility = (props) => {
    console.log(props.check)
    return (
        <div className={`animate__animated animate__fadeInRight ${styles.content}`} style={{ display: props.display }}>
            <div className={styles.chooseTitle}>Chọn tiện ích khách sạn</div>

            <div className={`row mt-3 ${styles.card}`}>
                <div className={`CheckFacility__inline col-4 ${styles.inline}`}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={false}
                                icon={<span className="iconCheckBox"></span>}
                                checkedIcon={<span className="iconCheckBox checked"></span>}
                                value={'Ban công/sân thượng'}
                            />
                        }
                    />
                    <span className={styles.title}>Ban công/sân thượng</span>
                </div>
                <div className={`CheckFacility__inline col-4 ${styles.inline}`}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={false}
                                icon={<span className="iconCheckBox"></span>}
                                checkedIcon={<span className="iconCheckBox checked"></span>}
                                value={'Ban công/sân thượng'}
                            />
                        }
                    />
                    <span className={styles.title}>Ban công/sân thượng</span>
                </div>
                <div className={`CheckFacility__inline col-4 ${styles.inline}`}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={false}
                                icon={<span className="iconCheckBox"></span>}
                                checkedIcon={<span className="iconCheckBox checked"></span>}
                                value={'Ban công/sân thượng'}
                            />
                        }
                    />
                    <span className={styles.title}>Ban công/sân thượng</span>
                </div>
                <div className={`CheckFacility__inline col-4 ${styles.inline}`}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={false}
                                icon={<span className="iconCheckBox"></span>}
                                checkedIcon={<span className="iconCheckBox checked"></span>}
                                value={'Ban công/sân thượng'}
                            />
                        }
                    />
                    <span className={styles.title}>Ban công/sân thượng</span>
                </div>
                <div className={`CheckFacility__inline col-4 ${styles.inline}`}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={false}
                                icon={<span className="iconCheckBox"></span>}
                                checkedIcon={<span className="iconCheckBox checked"></span>}
                                value={'Ban công/sân thượng'}
                            />
                        }
                    />
                    <span className={styles.title}>Ban công/sân thượng</span>
                </div>
                <div className={`CheckFacility__inline col-4 ${styles.inline}`}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={false}
                                icon={<span className="iconCheckBox"></span>}
                                checkedIcon={<span className="iconCheckBox checked"></span>}
                                value={'Ban công/sân thượng'}
                            />
                        }
                    />
                    <span className={styles.title}>Ban công/sân thượng</span>
                </div>
                <div className={`CheckFacility__inline col-4 ${styles.inline}`}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={false}
                                icon={<span className="iconCheckBox"></span>}
                                checkedIcon={<span className="iconCheckBox checked"></span>}
                                value={'Ban công/sân thượng'}
                            />
                        }
                    />
                    <span className={styles.title}>Ban công/sân thượng</span>
                </div>
                <div className={`CheckFacility__inline col-4 ${styles.inline}`}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={false}
                                icon={<span className="iconCheckBox"></span>}
                                checkedIcon={<span className="iconCheckBox checked"></span>}
                                value={'Ban công/sân thượng'}
                            />
                        }
                    />
                    <span className={styles.title}>Ban công/sân thượng</span>
                </div>
            </div>

            {!props.check && (
                <>
                    <div className={styles.chooseTitle}>Chọn nhãn</div>
                    <div className={`row mt-3 ${styles.card}`}>
                        <div className={`CheckFacility__inline col-4 ${styles.inline}`}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={false}
                                        icon={<span className="iconCheckBox"></span>}
                                        checkedIcon={<span className="iconCheckBox checked"></span>}
                                        value={'Ưu đãi chớp nhoáng'}
                                    />
                                }
                            />
                            <span className={styles.title}>Ưu đãi chớp nhoáng</span>
                        </div>
                        <div className={`CheckFacility__inline col-4 ${styles.inline}`}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={false}
                                        icon={<span className="iconCheckBox"></span>}
                                        checkedIcon={<span className="iconCheckBox checked"></span>}
                                        value={'Giá cực tốt'}
                                    />
                                }
                            />
                            <span className={styles.title}>Giá cực tốt</span>
                        </div>
                        <div className={`CheckFacility__inline col-4 ${styles.inline}`}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={false}
                                        icon={<span className="iconCheckBox"></span>}
                                        checkedIcon={<span className="iconCheckBox checked"></span>}
                                        value={'Khách sạn yêu thích'}
                                    />
                                }
                            />
                            <span className={styles.title}>Khách sạn yêu thích</span>
                        </div>
                    </div>
                    <div className={styles.chooseTitle}>Thông tin hữu ích</div>
                    <div className={styles.chooseTitle}>Khoảng cách tới trung tâm</div>
                    <div className={` mt-3 ${styles.card1}`}>
                        <input className={styles.input} type="number" name="name" />
                        <span>km</span>
                    </div>
                    <div className={styles.chooseTitle}>Khoảng cách tới trung tâm</div>
                    <div className={` mt-3 ${styles.card1}`}>
                        <input className={styles.input} type="number" name="name" />
                        <span>km</span>
                    </div>
                </>
            )}
        </div>
    )
}
export default CheckFacility
