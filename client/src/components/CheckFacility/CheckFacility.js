import { Checkbox, FormControlLabel } from '@material-ui/core'
import styles from './CheckFacility.module.scss'
import 'animate.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const AllNhan = [{
    ID: 1,
    Ten: "Ưu đãi chớp nhoáng",
}, {
    ID: 2,
    Ten: "Giá cực tốt",
}, {
    ID: 3,
    Ten: "Khách sạn yêu thích",
}]
const CheckFacility = (props) => {
    // Dữ liệu cho bảng
    // const [data, setData] = useState(null)
    // const [tienNghi, setTienNghi] = useState(null)
    // const [thongTin, setThongTin] = useState(null)
    // const [nhan, setNhan] = useState(null)
    // useEffect(() => {
    //     setFirst(true)
    //     axios.get('http://localhost:8800/cks/facility')
    //         .then((response) => {
    //             for (let check of response.data.types) {
    //                 check.checked = false;
    //             }
    //             for (let check of response.data.useFull) {
    //                 check.NoiDung = '';
    //             }
    //             setTienNghi(response.data.types)
    //             props.handleChangeTienNghi(response.data.types)
    //             props.handleChangeThongTin(response.data.useFull)
    //             setThongTin(response.data.useFull)
    //             setData(response.data)
    //         })
    //         .catch((error) => {
    //         })
    // }, [])
    // console.log(thongTin.length)
    const handleCheckboxChangeTienNghi = (event, index) => {
        const { checked } = event.target;

        props.handleChangeTienNghi((prevTienNghi) =>
            prevTienNghi.map((tienNghi, i) =>
                i === index ? { ...tienNghi, checked } : tienNghi
            ))
    };
    const handleCheckboxChangeNhan = (event, index) => {
        const value = event.target.value;
        props.handleChangeNhan(value)
    };
    const handleCheckboxChangeUseFull = (event, index) => {
        const value = event.target.value;
        props.handleChangeThongTin((prevThongTin) =>
            prevThongTin.map((ThongTin, i) =>
                i === index ? { ...ThongTin, NoiDung: value.toString() } : ThongTin
            ))
    };
    return (
        <div className={`animate__animated animate__fadeInRight ${styles.content}`} style={{ display: props.display }}>
            <div className={`${styles.chooseTitle} `}>Chọn các loại tiện nghi<span>*</span></div>
            {props.tienNghi !== null && props.tienNghi.map((data) => {
                return <div key={data.ID}>
                    <div className={styles.chooseTitle1}>{data.TenLoai}</div>
                    <div className={`row mt-3 ${styles.card}`}>
                        {data.TienNghi.map((tienNghi, index) => {
                            return <div key={tienNghi.ID} className={`CheckFacility__inline col-4 ${styles.inline} `}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={tienNghi.checked}
                                            icon={<span className="iconCheckBox"></span>}
                                            checkedIcon={<span className="iconCheckBox checked"></span>}
                                            value={tienNghi.TenTienNghi}
                                            onChange={(event) => handleCheckboxChangeTienNghi(event, index)}
                                        />
                                    }
                                />
                                <span className={styles.title}>{tienNghi.TenTienNghi}</span>
                            </div>
                        })}

                    </div>
                </div>
            })}
            {!props.check && (
                <>
                    <div className={` ${styles.chooseTitle}`}>Chọn nhãn<span>*</span></div>
                    <div className={`row mt-3 ${styles.card}`}>
                        {AllNhan.map((nhan1, index) => {
                            return <div key={index} className={`CheckFacility__inline col-4 ${styles.inline}`}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={nhan1.Ten === props.nhan ? true : false}
                                            icon={<span className="iconCheckBox"></span>}
                                            checkedIcon={<span className="iconCheckBox checked"></span>}
                                            value={nhan1.Ten}
                                            onChange={handleCheckboxChangeNhan}

                                        />
                                    }
                                />
                                <span className={styles.title}>{nhan1.Ten}</span>
                            </div>
                        })}



                    </div>
                    <div className={` ${styles.chooseTitle}`}>Thông tin hữu ích<span>*</span></div>
                    <div className='row mt-3'>
                        {props.thongTin !== null && props.thongTin.map((data, index) => {
                            return <div key={index} className='col-4 '>
                                <div className={styles.chooseTitle1}>{data.ThongTin}</div>
                                <div className={`${styles.card1}`}>
                                    <input
                                        onChange={(event) => handleCheckboxChangeUseFull(event, index)}
                                        className={styles.input} type="number" name="name" />
                                    <span dangerouslySetInnerHTML={{ __html: data.HinhAnh }} />
                                </div>
                            </div>
                        })}


                    </div>


                </>
            )}


        </div>
    )
}
export default CheckFacility
