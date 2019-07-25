import React from 'react';
import next from './images/next_arrow.png';

const Next = (props) => {
  return (
    <div className={`next ${props.isDisabled ? 'disabled' : ''}`} onClick={props.slideNext}>
      <img alt="next" src={next} />
    </div>
  );
}

export default Next;