import React, { Fragment, useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import './RatingCheckboxList.scss'
function RatingCheckboxList(props) {
  // console.log(props.data);
  const [ratingValues, setRatingValues] = useState(props.data);
  const handleCheckboxChange = (event) => {
    const checkedValue = event.target.value;
    console.log(checkedValue)
    const updatedValues = ratingValues.map((item) => {
      // console.log(checkedValue)
      return item.value === checkedValue ? { ...item, checked: event.target.checked } : item
    }
    );
    setRatingValues(updatedValues);
  };

  return (
    <div className='RatingCheckboxList'>
      {ratingValues.map((item) => (
        <FormControlLabel
          key={item.id}
          control={<Checkbox checked={item.checked || false}
            icon={<span className='iconCheckBox'></span>}
            checkedIcon={<span className='iconCheckBox checked'></span>}
            onChange={handleCheckboxChange}
            value={item.value} />}
          label={item.label}
        />
      ))}
    </div>
  );
}
export default RatingCheckboxList;