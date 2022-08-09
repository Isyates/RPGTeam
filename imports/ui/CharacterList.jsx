import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CharacterCollection } from '../api/CharacterData';


export const CharList = () =>{
  const characters = useTracker(() => {
    return CharacterCollection.find().fetch()
  })

return (
<div>
 <h1>testing</h1>
<ul>{characters.map(
  character => 
  <li key={character._id}>
    <h1>{character.name}</h1>
    <h2>{character.job}</h2>
  </li>
)}</ul>
</div>
);
}