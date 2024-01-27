import React from 'react';
export default ({ onButtonClick }) => {
  console.log('Child re-rendered!');
  return (
    <button onClick={onButtonClick}>
      Child component click to manual rerender parent
    </button>
  );
};
