import React from 'react';
import RatingCheckboxList from '../RatingCheckboxList/RatingCheckboxList';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ratingValues = [
  { id: 5, value: '5', label: <><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></> },
  { id: 4, value: '4', label: <><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></> },
  { id: 3, value: '3', label: <><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></> },
  { id: 2, value: '2', label: <><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></> },
  { id: 1, value: '1', label: <FontAwesomeIcon icon={faStar} /> },
];


function Star() {
  return (
    <RatingCheckboxList data={ratingValues} />
  );
}

export default Star;
