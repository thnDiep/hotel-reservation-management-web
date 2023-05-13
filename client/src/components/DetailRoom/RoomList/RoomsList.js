import React from 'react'
import RoomItem from '../RoomItem/RoomItem'
import classes from './RoomsList.module.scss'
import RoomOfHotel from '~/assets/jsons/roomOfHotel.json'
const RoomsList = ({ rooms }) => {
    // let PlacesContent = <p>No Place found</p>
    // if (props.items.length === 0) {
    //     return <h2 className="Places-list__fallback">found no Place</h2>
    // }
    return (
        <div className={classes.RoomOfHotel}>
            {rooms.map((Place) => (
                // console.log(Place)
                <RoomItem key={Place.ID} item={Place} />
            ))}
        </div>
    )
}
export default RoomsList
