import React from 'react';

/* 
  Functional component which get disabled and goToPrev as props.
  goToPrev props triggers event in slider component.
*/

const PreviousArrow = ({ isDisabled, goToPrev }) => {
  return (
    <div className={`buttonBack ${isDisabled ? 'disabled' : ''}`}>
      <i className="fa fa-chevron-circle-left" onClick={goToPrev}></i>
    </div>
  );
}

export default PreviousArrow;