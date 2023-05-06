import React from 'react';
import RatingCheckboxList from '../RatingCheckboxList/RatingCheckboxList';

const ratingValues = [
    { id: 5, value: 'freeBreakfast', label: 'Ăn sáng miễn phí' },
    { id: 6, value: 'flexibleCancellation', label: 'Hủy linh hoạt' },
    { id: 7, value: 'discount', label: 'Khuyến mãi và giảm giá' }
];


function Amenities() {
    return (
        <RatingCheckboxList data={ratingValues} />
    );
}

export default Amenities;
