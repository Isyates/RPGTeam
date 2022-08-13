import React, { useState } from 'react';
import { useTracker, useFind } from 'meteor/react-meteor-data';

import { CharacterCollection } from '../api/CharacterData';
import { render } from 'react-dom';

const deleteCharacter = ({ _id }) => CharacterCollection.remove(_id)



const useChar = () => {
  
 const char = useFind(() => {

  let char2 = CharacterCollection.findOne({_id:'RSL6S86gBnuKMepJt'})

   console.log(char)
   console.log(char2)

})
}
 const CharSelect = (charID) =>{
  let char =  CharacterCollection.findOne({_id:charID}) 
  console.log(char.job)

  return (
    <h2> testing</h2>
  )
  }



export const CharList = () =>{
  const characters = useTracker(() => {
    return CharacterCollection.find().fetch()
  })


return (

<div>







<ul>{characters.map(
  character =>
  <div>
    
  <ul key={character._id}>
  <button onClick= {() => deleteCharacter(character)}>Delete</button>
  <button value='testing'onClick= {() => CharSelect(character._id)}>CharSelect</button>
  <button value='testing'onClick= {() => useChar()}>useChar </button>
    <h2>{character._id}</h2>
    <h2>{character.name}</h2>
    <h2>{character.job}</h2>
    
  </ul>
  
  </div> 
)}</ul>



</div>

);
}
