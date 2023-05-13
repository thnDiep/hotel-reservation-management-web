import React from 'react'
import classes from './FacilityItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const FacilityItem = (props) => {
    return (
        <React.Fragment>
            <div className={classes['box-item-fac']}>
                <h3>{props.item.tienNghi[0] !== null && props.item.TenLoai}</h3>
                <div className={classes.items}>
                    {props.item.tienNghi.map((data, index) => {
                        return (
                            <div key={index} className={`d-flex align-items-center mb-4 ${classes.fontsize}`}>
                                {/* <FontAwesomeIcon
                                    icon={['fas', data.icon]}
                                    className={classes['icon-fac-detail']}
                                ></FontAwesomeIcon> */}
                                {data && (
                                    <>
                                        <img src={data.Icon} alt="" className={classes['icon-fac-detail']}></img>
                                        <span className={classes.detailName}> {data.TenTienNghi}</span>
                                    </>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}
export default FacilityItem
