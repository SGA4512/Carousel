import React from 'react';

/* 
  Functional component which get disabled and goToNext as props.
  goToNext props triggers event in slider component.
*/

const NextArrow = ({ isDisabled, goToNext }) => {
  return (
    <div className={`buttonNext ${isDisabled ? 'disabled' : ''}`}>
      <i className="fa fa-chevron-circle-right" onClick={goToNext}></i>
    </div>
  );
}

export default NextArrow;