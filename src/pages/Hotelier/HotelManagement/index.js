import React from 'react'
import styles from './HotelManagement.module.scss'
import TitleButton from '~/components/Button/TitleButton'
import { ButtonPrimary } from '~/components'
const HotelManagement = () => {
    return (
        <>
            <div className="mt-4 d-flex justify-content-between align-items-center flex-wrap">
                <div className="card-action coin-tabs mb-2">
                    <ul className="nav nav-tabs nav" role="tablist">
                        <li className="nav-item nav-item">
                            <TitleButton name="Tất cả" className="btnChoose" active="active"></TitleButton>
                        </li>
                        <li className="nav-item nav-item">
                            <TitleButton name="Chờ duyệt" className="btnChoose"></TitleButton>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <ButtonPrimary className="btnLarge1">+ Thêm khách sạn</ButtonPrimary>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <div id="room_wrapper" className="dataTables_wrapper no-footer">
                                    <table className={`table ${styles['card-table']} mb-4`}>
                                        <thead>
                                            <tr role="row">
                                                <th class={styles.sorting_asc_7}>
                                                    <div class="form-check style-1">
                                                        <input type="checkbox" class="form-check-input" id="checkAll" />
                                                    </div>
                                                </th>
                                                <th>Tên khách sạn</th>
                                                <th>Chủ khách sạn</th>
                                                <th>Địa chỉ</th>
                                                <th>Trạng thái</th>
                                                <th class="bg-none"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row">
                                                <td>
                                                    <div className="form-check ">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="customCheckBox21"
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class={`${styles['room-list-bx']} d-flex align-items-center`}>
                                                        <img
                                                            className="me-3 rounded"
                                                            src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/ab47d8b24d903c37aabc89445a9ff105.jpg"
                                                            alt=""
                                                        />
                                                        <div>
                                                            <span class=" text-secondary fs-14 d-block">#12341225</span>
                                                            <span class=" fs-16 font-w500 text-nowrap">
                                                                Deluxe A-91234
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HotelManagement
