import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

import VoucherForm from './VoucherForm'
import FlashSaleForm from './FlashSaleForm'
import styles from '../Promotion.module.scss'
import { NavHandle } from '~/components'
import promotion from '~/assets/jsons/promotion.json'

function AddPromotion() {
    const { active, id } = useParams()
    const navigate = useNavigate()

    const [showInformModal, setShowInformModal] = useState(false)
    const [showForm, setShowForm] = useState(() => {
        if (active !== 'undefined' && active !== undefined) {
            return parseInt(active)
        }
        return 0
    })
    const [formData, setFormData] = useState({})
    const [flashSaleState, setFlashSaleState] = useState({
        fields: { BatDau: new Date(), IDKhungGio: 1, IDKhachSan: 1 },
        errors: {},
    })

    function handleAddFlashSale() {
        let validForm = true

        const fields = flashSaleState.fields
        const errors = {}

        if (!fields.TieuDe) {
            errors.TieuDe = 'Nhập tiêu đề khuyến mãi'
            validForm = false
        }

        if (!fields.PhanTramKM) {
            errors.PhanTramKM = 'Nhập phần trăm khuyến mãi'
            validForm = false
        } else if (fields.PhanTramKM <= 0 || fields.PhanTramKM >= 100) {
            errors.PhanTramKM = 'Phần trăm không hợp lệ'
            validForm = false
        }

        if (!fields.BatDau) {
            errors.BatDau = 'Nhập ngày bắt đầu'
            validForm = false
        }
        if (fields.KetThuc && fields.BatDau >= fields.KetThuc) {
            errors.KetThuc = 'Ngày kết thúc phải sau ngày bắt đầu'
            validForm = false
        }

        const form = { fields, errors }
        setFlashSaleState(form)

        return validForm
    }

    // Lấy dữ liệu cho form  ============================> có thể thay thế bằng useContext =====> xử lý sau
    useEffect(() => {
        Axios.get('http://localhost:8800/cks/promotion/insert', { params: { idCKS: 1 } })
            .then((response) => {
                setFormData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    // Lấy dữ liệu từ promotion để chỉnh sửa
    useEffect(() => {
        if (id !== undefined) {
            Axios.get('http://localhost:8800/cks/promotion/update', { params: { idPromotion: id, idCKS: 1 } })
                .then((response) => {
                    const data = response.data
                    data.BatDau = new Date(data.BatDau)

                    if (data.KetThuc) {
                        data.KetThuc = new Date(data.KetThuc)
                    }

                    setFlashSaleState({
                        fields: data,
                        errors: {},
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [])

    const [voucherState, setVoucherState] = useState({
        fields: { start: new Date(), percent: 5, number: 100 },
        errors: {},
    })
    function handleAddVoucher() {
        let validForm = true

        const fields = voucherState.fields
        const errors = {}

        if (!fields.title) {
            errors.title = 'Nhập tiêu đề khuyến mãi'
            validForm = false
        }

        if (!fields.voucher) {
            errors.voucher = 'Nhập mã Voucher'
            validForm = false
        }

        if (!fields.percent) {
            errors.percent = 'Nhập phần trăm khuyến mãi'
            validForm = false
        } else if (fields.percent <= 0 || fields.percent >= 100) {
            errors.percent = 'Phần trăm không hợp lệ'
            validForm = false
        }

        if (!fields.start) {
            errors.start = 'Nhập thời gian bắt đầu'
            validForm = false
        }
        if (fields.end && fields.start >= fields.end) {
            errors.end = 'Thời gian kết thúc phải sau thời gian bắt đầu'
            validForm = false
        }

        if (fields.number && fields.number <= 0) {
            errors.end = 'Số lượng giới hạn không hợp lệ'
            validForm = false
        }

        const form = { fields, errors }
        setVoucherState(form)

        return validForm
    }

    function handleSubmit() {
        if (showForm === 0 && handleAddVoucher()) {
            alert('Thêm thành công')
            console.log(voucherState.fields)
            navigate('/cks/voucher', { state: { active: 0 } })
        } else if (showForm === 1 && handleAddFlashSale()) {
            flashSaleState.fields.BatDau.setUTCHours(0, 0, 0, 0)

            if (flashSaleState.fields.KetThuc) flashSaleState.fields.KetThuc.setUTCHours(0, 0, 0, 0)

            console.log(flashSaleState.fields)
            Axios.post(`http://localhost:8800/cks/promotion/${id ? 'update' : 'insert'}`, {
                khuyenmai: flashSaleState.fields,
            })
                .then(() => {
                    setShowInformModal(true)

                    window.setTimeout(function () {
                        setShowInformModal(false)
                        navigate('/cks/voucher', { state: { active: 1 } })
                    }, 1000)
                })
                .catch((error) => console.log(error))
        } else {
            window.scrollTo(0, 0)
        }
    }

    return (
        <div className={styles.container}>
            <div className={clsx(styles.content, styles.add)}>
                <NavHandle list={promotion.menu} active={showForm} onActive={setShowForm} />

                {showForm === 0 && (
                    <div className={styles.form}>
                        <h3 className={styles.form__header}>Thêm Voucher</h3>
                        <VoucherForm formData={formData} data={voucherState} onEdit={setVoucherState} styles={styles} />
                    </div>
                )}

                {showForm === 1 && (
                    <div className={styles.form}>
                        {!id && <h3 className={styles.form__header}>Thêm FlashSale</h3>}
                        {id && <h3 className={styles.form__header}>Chỉnh sửa FlashSale</h3>}
                        <FlashSaleForm
                            formData={formData}
                            data={flashSaleState}
                            onEdit={setFlashSaleState}
                            styles={styles}
                        />
                    </div>
                )}

                <div className={styles.footer}>
                    <Link to={`/cks/voucher/${showForm}`} className="btn-1">
                        Quay lại
                    </Link>
                    <div className="btn-1 primary" onClick={() => handleSubmit()}>
                        {!id && 'Thêm'}
                        {id && 'Lưu'}
                    </div>
                </div>

                {/* Thông báo thành công */}
                {showInformModal && (
                    <div id="myModal" className="myModal1">
                        {/* <!-- Modal content --> */}
                        <div className="modalContent">
                            <FontAwesomeIcon icon={faCheckCircle} className="modalIcon" />
                            <div>
                                {!id && 'Thêm thành công'}
                                {id && 'Lưu thành công'}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AddPromotion
