import React from 'react';

export default function ValidationError(props) {
  if(props.message) {
    return (
      <div>
        <span className = 'error red'>{props.message}</span>
      </div>
    );
  }
  return <>
  </>
}