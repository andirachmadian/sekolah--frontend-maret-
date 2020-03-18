import React, { useState } from 'react';

export default function Baru(props) {
  const [state, setState] = useState({
    hobi: 'sepak bola',
    umur: '27'
  });

  function handleNameChange(e) {
    setState(e.target.value);
  }

  return (
    <>
      <div>{props.nama}</div>
      <div>{props.umur}</div>
      <div>{props.lokasi}</div>
      <div>==============</div>
      {/* <div>{nama}</div>
      <input value={nama} onChange={handleNameChange}></input> */}
    </>
  );
}
