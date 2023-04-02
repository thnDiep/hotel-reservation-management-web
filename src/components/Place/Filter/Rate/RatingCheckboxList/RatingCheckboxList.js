import React, { Fragment, useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <Fragment>
      {ratingValues.map((item) => (
        <FormControlLabel
          key={item.id}
          control={<Checkbox checked={item.checked || false} onChange={handleCheckboxChange} value={item.value} />}
          label={item.label}
        />
      ))}
    </Fragment>
  );
}
export default RatingCheckboxList;