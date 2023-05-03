import Modal from 'react-bootstrap/Modal'
import clsx from 'clsx'

import styles from './ConditionModal.module.scss'

function ConditionModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={clsx(styles.conditionModal, 'myModal')}
        >
            <Modal.Header closeButton style={{ border: 'none' }}>
                <h3>Điều kiện và thể lệ chương trình</h3>
            </Modal.Header>
            <Modal.Body>
                <h4>Khách sạn giảm đến 200K</h4>
                <p>
                    - Giảm ngay 4% tối đa 200.000Đ cho đơn phòng khách sạn (mức giảm áp dụng cho giá trị đơn chưa bao
                    gồm thuế phí).
                    <br />- Ưu đãi được áp dụng cho một số hạng phòng của khách sạn
                    <br />- Thời gian sử dụng mã: 01/05/2023 - 31/05/2023
                    <br />- Ưu đãi không được áp dụng cùng các chương trình khuyến mãi khác.
                    <br />- Mỗi khách hàng chỉ được hưởng ưu đãi 01 lần/ chương trình. Chương trình chỉ áp dụng cho
                    khách hàng cá nhân.
                    <br />- Nếu phát hiện các đặt phòng có dấu hiệu lạm dụng, trục lợi ưu đãi, Mytour có quyền từ chối
                    áp dụng.
                    <br />- Áp dụng hoàn hủy theo chính sách khách sạn.
                    <br />- Mytour có quyền thay đổi điều khoản và thể lệ của chương trình khuyến mại mà không cần thông
                    báo trước. Vui lòng truy cập Mytour.vn để cập nhật các ưu đãi và chính sách mới nhất.
                    <br />- Mọi quyết định của Mytour là kết quả cuối cùng.
                    <br />
                    ***Mọi thắc mắc vui lòng liên hệ 1900 2083.
                </p>
            </Modal.Body>
        </Modal>
    )
}

export default ConditionModal
