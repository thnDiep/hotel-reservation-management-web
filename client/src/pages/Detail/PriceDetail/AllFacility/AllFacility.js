import React from 'react'
import FacilityList from '~/components/DetailRoom/FacilityList/FacilityList'
import './AllFacility.scss'
import classes from './AllFacility.module.scss'
import {
    faBath,
    faBed,
    faBlender,
    faBoxTissue,
    faBroom,
    faBuilding,
    faCocktail,
    faCouch,
    faDumbbell,
    faElevator,
    faGlassCheers,
    faHotTub,
    faHouse,
    faJugDetergent,
    faKey,
    faLuggageCart,
    faMapMarkedAlt,
    faMugHot,
    faParking,
    faPhone,
    faPlaneDeparture,
    faPumpSoap,
    faRulerCombined,
    faShower,
    faSink,
    faSmokingBan,
    faSnowflake,
    faSoap,
    faSpa,
    faSun,
    faSwimmer,
    faTv,
    faUserCheck,
    faUserShield,
    faUserTie,
    faUtensilSpoon,
    faUtensils,
    faWheelchair,
    faWifi,
    faWind,
    faWineBottle,
    faWineGlass,
    faWineGlassAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AllFacility = () => {
    return (
        <div>
            <div className={classes.subContainer}>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className={classes['box-fac']}>
                            <div className={classes['box-detail-fac']}>
                                <FacilityList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllFacility
