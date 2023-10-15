import React from 'react';

const Steps = ({ url, heading, text }) => {
  const divStyle = {
    height: '420px',
    width: '340px',
    display: 'grid',
    placeItems: 'center',
  };

  return (
    <div style={divStyle}>
      <img src={url} alt="emote" />
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Steps;
