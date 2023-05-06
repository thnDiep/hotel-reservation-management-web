import React from 'react'
import FacilityOfHotel from '~/assets/jsons/facilityOfHotel.json'
import FacilityItem from '../FacilityItem/FacilityItem'
const FacilityList = (props) => {
    return (
        <div>
            {FacilityOfHotel.map((Part) => (
                <FacilityItem key={Part.id} item={Part} />
            ))}
        </div>
    )
}

export default FacilityList
