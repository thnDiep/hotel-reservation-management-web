import React from "react";
import RoomItem from "../RoomItem/RoomItem";
import classes from './RoomsList.module.scss'
import RoomOfHotel from '~/assets/jsons/roomOfHotel.json'
const RoomsList = props => {
    // let PlacesContent = <p>No Place found</p>
    // if (props.items.length === 0) {
    //     return <h2 className="Places-list__fallback">found no Place</h2>
    // }
    console.log(RoomOfHotel)
    return <div className={classes.RoomOfHotel}>
        {RoomOfHotel.map((Place) => (
            // console.log(Place)
            < RoomItem
                key={Place.id}
                item={Place}
            />
        ))}
    </div>
}
export default RoomsList;