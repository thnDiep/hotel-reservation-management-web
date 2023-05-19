import React from 'react'
import PlaceItem from '../PlaceItem/PlaceItem'
const PlacesList = (props) => {
    // let PlacesContent = <p>No Place found</p>
    if (props.items.length === 0) {
        return <h2 className="Places-list__fallback">found no Place</h2>
    }
    return (
        <div className="Places-list">
            {props.items.map((Place) => {
                Place.GiaMoi = Place.Gia - (Place.Gia * Place.GiamGia) / 100
                return Place.checked && <PlaceItem key={Place.ID} item={Place} liked={Place.liked} />
            })}
        </div>
    )
}
export default PlacesList
