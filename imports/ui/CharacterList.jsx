import React, { useEffect } from 'react';
import { useTracker, useFind } from 'meteor/react-meteor-data';
import { CharacterCollection } from '../api/CharacterData';
import { CharacterDetail } from './CharacterDetail';
import {LinksCollection} from '../api/links'





const deleteCharacter = ({ _id }) => CharacterCollection.remove(_id)

export const CharList = ({charas, setCharas}) =>{
  const characters = useTracker(() => {
    return CharacterCollection.find().fetch()
  })




return (
<div>

<ul>{characters.map(
  character =>
  <div>
    
    <button onClick= {() => deleteCharacter(character)}>Delete</button>
  <ul key={character._id}>
 
  <button value={character}onClick={ () => setCharas(character) }>Show detail</button>
  
    <h2>{character.name}</h2>
    <h2>{character.job}</h2>
  </ul>
  </div> 
)}</ul>
</div>

);
}