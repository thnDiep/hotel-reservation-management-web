import React from 'react'
import classes from './ProfileHotelier.module.scss'
import { Link } from 'react-router-dom'
import { ButtonPrimary } from '~/components'
const ProfileHotelier = () => {
    return (
        <div className={classes['main-content']}>
            <div className="container-fluid mt-7">
                <div className="">
                    <div className=" mb-5 mb-xl-0">
                        <div className={`card ${classes['card-profile']} shadow`}>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 order-lg-2">
                                    <div className={classes.cardImage}>
                                        <img
                                            src="https://lh3.googleusercontent.com/0J1Z04Fe92XOonopKVLhAli0c5W3J5OvstIdl208EUJZfoZm0X9XAQAzwa-NiSWErnk"
                                            className={`${classes['rounded-circle']} `}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${classes['card-header']} text-center border-0 pt-8 pt-md-5 pb-0 pb-md-5`}
                            ></div>
                            <div className="card-body pt-0 pt-md-4 mt-5">
                                <div className="text-center mt-3">
                                    <h3>Nguyễn Thị B</h3>
                                    <div className="h5 font-weight-300">
                                        <i className="ni location_pin mr-2"></i>227 Nguyễn Văn Cừ. Quận 5. TPHCM
                                    </div>

                                    <div>
                                        <i className="ni education_hat mr-2"></i>Công ty TMCP & DV Đông Cung
                                    </div>
                                    <hr className="my-4" />
                                    <p className={classes.slogan}>
                                        "Welcome to our luxurious retreat, where you can unwind and escape from the
                                        stresses of everyday life. Our hotel offers the perfect balance of comfort,
                                        elegance, and tranquility, ensuring that you have a truly unforgettable stay."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 mb-xl-0">
                        <div className={`card bg-secondary shadow ${classes.container1}`}>
                            <div className={`${classes['card-header']}  border-0 `}>
                                <div className=" align-items-center d-flex justify-content-between">
                                    <div className="">
                                        <h3 className="my-4 mx-2">My account</h3>
                                    </div>
                                    <div className=" text-right ml-auto">
                                        <Link to="#" className={classes.btn}>
                                            Edit Information
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`card-body ${classes.bodyCard}`}>
                                <form>
                                    <h6 className={`${classes[`heading-small`]} ${classes['text-muted']} mb-4`}>
                                        Thông tin cá nhân
                                    </h6>
                                    <div className="pl-lg-4">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label
                                                        className={`${classes['form-control-label']}`}
                                                        for="input-username"
                                                    >
                                                        Họ tên
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="input-username"
                                                        className={`${classes['form-control']} ${classes['form-control-alternative']}`}
                                                        placeholder="Username"
                                                        value="Nguyễn Thị B"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label
                                                        className={`${classes['form-control-label']}`}
                                                        for="input-email"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="input-email"
                                                        className={`${classes['form-control']} ${classes['form-control-alternative']}`}
                                                        value="jesse@example.com"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label
                                                        className={`${classes['form-control-label']}`}
                                                        for="input-first-name"
                                                    >
                                                        Số điện thoại
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="input-first-name"
                                                        className={`${classes['form-control']} ${classes['form-control-alternative']}`}
                                                        value="0909132556"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label
                                                        className={`${classes['form-control-label']}`}
                                                        for="input-last-name"
                                                    >
                                                        Địa chỉ
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="input-last-name"
                                                        className={`${classes['form-control']} ${classes['form-control-alternative']}`}
                                                        value="224 Nguyễn Văn Cừ. Quận 5. TPHCM"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <h6 className={`${classes[`heading-small`]} ${classes['text-muted']} mb-4`}>
                                        Thông tin tài khoản
                                    </h6>
                                    <div className="pl-lg-4">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label
                                                        className={`${classes['form-control-label']}`}
                                                        for="input-username"
                                                    >
                                                        User name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="input-username"
                                                        className={`${classes['form-control']} ${classes['form-control-alternative']}`}
                                                        placeholder="Username"
                                                        value="B Nguyễn"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label
                                                        className={`${classes['form-control-label']}`}
                                                        for="input-email"
                                                    >
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        id="input-email"
                                                        className={`${classes['form-control']} ${classes['form-control-alternative']}`}
                                                        value="******"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <h6 className={`${classes[`heading-small`]} ${classes['text-muted']} mb-4`}>
                                        Thông tin tài khoản ngân hàng
                                    </h6>
                                    <div className="pl-lg-4">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group focused">
                                                    <label
                                                        className={`${classes['form-control-label']}`}
                                                        for="input-username"
                                                    >
                                                        Tên ngân hàng
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="input-username"
                                                        className={`${classes['form-control']} ${classes['form-control-alternative']}`}
                                                        value="SACOMBANK"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label
                                                        className={`${classes['form-control-label']}`}
                                                        for="input-username"
                                                    >
                                                        Tên chủ tài khoản
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="input-username"
                                                        className={`${classes['form-control']} ${classes['form-control-alternative']}`}
                                                        placeholder="Username"
                                                        value="NGUYEN THI B"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label
                                                        className={`${classes['form-control-label']}`}
                                                        for="input-email"
                                                    >
                                                        Số tài khoản
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="input-email"
                                                        className={`${classes['form-control']} ${classes['form-control-alternative']}`}
                                                        value="5542"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <h6 className={`${classes[`heading-small`]} ${classes['text-muted']} mb-4`}>
                                        Thông tin công ty
                                    </h6>
                                    <div className="pl-lg-4">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group focused">
                                                    <label
                                                        className={`${classes['form-control-label']}`}
                                                        for="input-address"
                                                    >
                                                        Tên công ty
                                                    </label>
                                                    <input
                                                        id="input-address"
                                                        className={`${classes['form-control']} ${classes['form-control-alternative']}`}
                                                        placeholder="Home Address"
                                                        value="Công ty TMCP & DV Đông Cung"
                                                        type="text"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label
                                                        className={`${classes['form-control-label']}`}
                                                        for="input-city"
                                                    >
                                                        Mã số thuế
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="input-city"
                                                        className={`${classes['form-control']} ${classes['form-control-alternative']}`}
                                                        placeholder="City"
                                                        value="7777"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label
                                                        className={`${classes['form-control-label']}`}
                                                        for="input-country"
                                                    >
                                                        Quy mô
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="input-country"
                                                        className={`${classes['form-control']} ${classes['form-control-alternative']}`}
                                                        placeholder="Country"
                                                        value="1-19 nhân viên"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileHotelier
