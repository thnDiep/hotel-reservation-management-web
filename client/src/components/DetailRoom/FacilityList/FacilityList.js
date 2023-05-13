import React from 'react'
import FacilityOfHotel from '~/assets/jsons/facilityOfHotel.json'
import FacilityItem from '../FacilityItem/FacilityItem'
const FacilityList = ({ typesHotel }) => {
    return (
        <div>
            {typesHotel.map((Part) => (
                <FacilityItem key={Part.id} item={Part} />
            ))}
        </div>
    )
}

export default FacilityList
