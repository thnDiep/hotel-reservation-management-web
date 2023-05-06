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
                <h3>{props.item.title}</h3>
                <div className={classes.items}>
                    {props.item.facility.map((data) => {
                        return (
                            <div key={data.title}>
                                <FontAwesomeIcon
                                    icon={['fas', data.icon]}
                                    className={classes['icon-fac-detail']}
                                ></FontAwesomeIcon>
                                <span className={classes.detailName}> {data.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}
export default FacilityItem
