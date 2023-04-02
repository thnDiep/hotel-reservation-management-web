import React from "react";
import PlaceItem from "../PlaceItem/PlaceItem";
const PlacesList = props => {
    // let PlacesContent = <p>No Place found</p>
    if (props.items.length === 0) {
        return <h2 className="Places-list__fallback">found no Place</h2>
    }
    return <div className="Places-list">
        {props.items.map((Place) => (
            <PlaceItem
                key={Place.id}
                item={Place}
            />
        ))}
    </div>
}
export default PlacesList;