import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CharacterCollection } from '../api/CharacterData';
import { render } from 'react-dom';

const jobOptions = ['Squire','Chemist','Monk','Thief','Time Mage',
'Mystic','Samurai','Ninja','Arithmetician','Dancer',
'Bard','Mime','Knight','Archer','Black Mage','White Mage',
'Geomancer','Dragoon','Summoner','Orator','Onion Knight','Dark Knight']

const deleteCharacter = ({ _id }) => CharacterCollection.remove(_id)



 const CharSelect = (charid) =>{
  let char = CharacterCollection.findOne()
   char =  CharacterCollection.findOne({_id:charid})
  

    console.log(char)
    let newval = char
    return (
    newval
   
  )
    
  }

  // console.log(newval)



export const CharList = () =>{
  const characters = useTracker(() => {
    return CharacterCollection.find().fetch()
  })


return (

<div>





<h1>this is </h1>

<ul>{characters.map(
  character =>
  <div>
    
    <button onClick= {() => deleteCharacter(character)}>Delete</button>
  <ul key={character._id}>
  <button value='testing'onClick= {() => CharSelect(character._id)}>setStatus button </button>
    <h2>{character._id}</h2>
    <h2>{character.name}</h2>
    <h2>{character.job}</h2>
    
  </ul>
  </div> 
)}</ul>


</div>

);
}
