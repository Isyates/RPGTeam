import React, { useState } from 'react';
import { CharacterCollection } from '../api/CharacterData';
import { useTracker } from 'meteor/react-meteor-data';

export const Example = () =>  {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState([]);


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount}>
        Click me
      </button>
    </div>
  );
}