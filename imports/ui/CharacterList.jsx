import React, { useEffect } from 'react';
import { useTracker, useFind } from 'meteor/react-meteor-data';
import { CharacterCollection } from '../api/CharacterCollection';






export const CharList = ({charas, setCharas}) =>{
  const characters = useTracker(() => {
    return CharacterCollection.find().fetch()
  })




return (
<div>

<ul>{characters.reverse().map(
  character =>
  <div class='box'  id='charlists'value={character}onClick={ () => setCharas(character) }>
    
  <ul key={character._id}>
  
    <h1 class='title is-4'>{character.name} </h1>
    <h2 class='subtitle is-5'>{character.job} </h2>

  </ul>
  </div> 
)}</ul>
</div>

);
}