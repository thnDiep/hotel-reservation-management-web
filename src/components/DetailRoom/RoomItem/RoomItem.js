import React from "react";
import classes from "./RoomItem.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faShop, faCheck, faSmoking, faHouse, faBed, faWifi, faMountain, faWater } from '@fortawesome/free-solid-svg-icons';
import ButtonPrimary from "~/components/Button/ButtonPrimary";

library.add(faHouse, faShop, faSmoking, faBed, faWifi, faMountain, faWater);

const RoomItem = (props) => {

    return (<div className={classes.BoxRoomItem}>
        <div className={classes.BoxTitle}>{props.item.title}</div>
        <div className={classes.BoxContent}>
            <div className={classes.BoxContent__left}>
                <div className={classes["BoxContent__left--img"]}>
                    <img alt="jell" src={props.item.image} />
                </div>
                <div className={classes["BoxContent__left--facilities"]}>
                    {props.item.convenient.map(data => {
                        return (<div key={data.title} style={data.icon === 'wifi' ? { color: '#32a923' } : null}><FontAwesomeIcon style={data.icon === 'wifi' ? { color: '#32a923' } : null} icon={['fas', data.icon]} />{data.title}</div>)
                    })}
                </div>
            </div>
            <div className={classes.BoxContent__right}>
                <div className={classes['BoxContent__right--top']}>
                    <div className={classes['box-passenger']}>
                        <div><FontAwesomeIcon icon={faUser} /> x 2 người lớn</div>
                        <div className={classes['box-child']}><FontAwesomeIcon icon={faUser} /> x 2 em bé</div>
                        <div> 1 bé dưới 11 tuổi được ở <span>MIỄN PHÍ</span></div>
                    </div>


                </div>
                <div className={classes['BoxContent__right--content']}>
                    <div className={classes['box-benefit']}>
                        <div className={classes.title}>Ưu đãi trong phòng</div>
                        <div className={classes.content}>
                            {props.item.promotion.map(data => {
                                return <div key={data}> <FontAwesomeIcon icon={faCheck} />
                                    {data}</div>
                            })}
                        </div>
                        <div className={classes.label}>Lưu ý: Giá phòng có thể thay đổi vào các dịp lễ tết, cuối tuần...</div>
                    </div>
                    <div></div>
                </div>
                <div className={classes['BoxContent__right--bottom']}>
                    <div className={classes["box-rule-price"]}>
                        <span>
                            <span className={classes.labelEndow}>Giảm {props.item.sale}% hôm nay</span>
                            <i></i>
                        </span>
                    </div>
                    <div className={classes["box-price"]}>
                        <div className={classes["box-price-inner"]}>
                            <div className={classes.old}>3,960,000 VND</div> 2,376,000 VND <span>/ đêm</span>
                        </div>
                        <div>
                            <ButtonPrimary className="btn__order">Đặt hàng</ButtonPrimary>
                        </div>
                    </div>
                </div>
                <div className={classes['BoxContent__right--note']}>
                    <div></div>
                    <span >Giá trên đã bao gồm thuế và phí</span>
                </div>
            </div>
        </div>
    </div>)
}
export default RoomItem
