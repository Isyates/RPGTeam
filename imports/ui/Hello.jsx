import React, { useState } from 'react';
import { CharacterCollection } from '../api/CharacterData';
import { ChooseNew } from './CharacterList'

testUpdate = CharacterCollection.findOne({_id: 'Bpstk8RXzYsKoXgDH' })

console.log(CharacterCollection.find({_id: 'Bpstk8RXzYsKoXgDH' }))

console.log(testUpdate)

export const Hello = () => {
  const [counter, setCounter] = useState(CharacterCollection.job)

  console.log(counter)




  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
