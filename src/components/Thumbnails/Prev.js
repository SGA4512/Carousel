import React from 'react';
import prev from './images/prev_arrow.png';

const Prev = (props) => {
  return (
    <div className={`prev ${props.isDisabled ? 'disabled' : ''}`} onClick={props.slideBack}>
      <img alt="next" src={prev} />
    </div>
  );
}

export default Prev;