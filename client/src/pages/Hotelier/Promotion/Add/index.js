import React, { useRef, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import VoucherForm from './VoucherForm'
import FlashSaleForm from './FlashSaleForm'
import styles from '../Promotion.module.scss'
import { NavHandle } from '~/components'
import voucher from '~/assets/jsons/voucher.json'

function AddPromotion() {
    const navigate = useNavigate()

    const [showForm, setShowForm] = useState(0)
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

    function handleSubmit() {
        if (showForm === 0 && handleAddVoucher()) {
            alert('Thêm thành công')
            console.log(voucherState.fields)
            navigate('/cks/voucher', { state: { active: 0 } })
        } else if (showForm === 1 && handleAddFlashSale()) {
            console.log(flashSaleState.fields)

            Axios.post('http://localhost:8800/api/cks/voucher/insert', { khuyenmai: flashSaleState.fields }).then(
                () => {
                    alert('Thêm thành công')
                    navigate('/cks/voucher', { state: { active: 1 } })
                },
            )
        } else {
            window.scrollTo(0, 0)
        }
    }

    return (
        <div className={styles.container}>
            <div className={clsx(styles.content, styles.add)}>
                <NavHandle list={voucher.menu} active={showForm} onActive={setShowForm} />

                {showForm === 0 && (
                    <div className={styles.form}>
                        <h3 className={styles.form__header}>Thêm Voucher</h3>
                        <VoucherForm data={voucherState} onEdit={setVoucherState} />
                    </div>
                )}

                {showForm === 1 && (
                    <div className={styles.form}>
                        <h3 className={styles.form__header}>Thêm FlashSale</h3>
                        <FlashSaleForm data={flashSaleState} onEdit={setFlashSaleState} />
                    </div>
                )}

                <div className={styles.footer}>
                    <Link to="/cks/voucher" className="btn-1">
                        Quay lại
                    </Link>
                    <div className="btn-1 primary" onClick={() => handleSubmit()}>
                        Thêm
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPromotion
