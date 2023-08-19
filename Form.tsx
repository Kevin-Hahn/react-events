import * as React from 'react';

export const Form = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  };

  return <input onChange={handleChange} />;
};
