import Modal from 'react-bootstrap/Modal'
import styles from './ConformModal.module.scss'

function ConformModal(props) {
    return (
        <Modal show={props.show} onHide={props.onClose} className="myModal" style={{ marginTop: '100px' }}>
            <Modal.Header closeButton style={{ border: 'none' }}>
                <h2>Xác nhận</h2>
            </Modal.Header>
            <Modal.Body>
                <div className={styles.content}>
                    {props.content}
                    <span>&nbsp;'{props.highlight}'</span>
                </div>
                <div className={styles.footer}>
                    <div className={styles.cancel} onClick={props.onClose}>
                        Hủy bỏ
                    </div>
                    <div className={styles.conform} onClick={props.onConform}>
                        {props.conFormBtn && `${props.conFormBtn}`}
                        {!props.conFormBtn && 'Xóa'}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ConformModal
