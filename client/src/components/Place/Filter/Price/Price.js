import React, { Fragment, useState } from 'react'
import { Slider } from '@material-ui/core'
import './Price.scss'
// import styles from './Price.module.scss';
function PriceSlider({ filterPrice }) {
    const [value, setValue] = useState([0, 1000])
    const formatMoney = (amount) => {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    }
    const handleChange = (event, newValue) => {
        setValue(newValue)
        filterPrice(newValue[0] * 5000, newValue[1] * 5000)
        // const minAmount = newValue[0] * 5000;
        // const maxAmount = newValue[1] * 5000;
        // const formattedMinAmount = formatMoney(minAmount);
        // const formattedMaxAmount = formatMoney(maxAmount);
    }
    const minAmount = value[0] * 5000
    const maxAmount = value[1] * 5000
    const formattedMinAmount = formatMoney(minAmount)
    const formattedMaxAmount = formatMoney(maxAmount)
    return (
        <div className="Silder-Price">
            <div className={'money'}>
                {formattedMinAmount} - {formattedMaxAmount} +{' '}
            </div>
            <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="range-slider"
                // valueLabelDisplay="off"
                min={0}
                max={1000}
                className={'my-slider-class'}
            />
        </div>
    )
}

export default PriceSlider
