import React, { useEffect } from 'react';
import { useTracker, useFind } from 'meteor/react-meteor-data';
import { CharacterCollection } from '../api/CharacterData';
import { CharacterDetail } from './CharacterDetail';
import {LinksCollection} from '../api/links'






export const CharList = ({charas, setCharas}) =>{
  const characters = useTracker(() => {
    return CharacterCollection.find().fetch()
  })




return (
<div>

<ul>{characters.map(
  character =>
  <div class='box'>
    
  <ul key={character._id}>
 
  <button value={character}onClick={ () => setCharas(character) }>Show detail</button>
  
    <h1>Name: {character.name} </h1>
    <h2>Job: {character.job} </h2>

  </ul>
  </div> 
)}</ul>
</div>

);
}