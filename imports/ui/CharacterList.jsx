import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CharacterCollection } from '../api/CharacterData';
import { render } from 'react-dom';

const jobOptions = ['Squire','Chemist','Monk','Thief','Time Mage',
'Mystic','Samurai','Ninja','Arithmetician','Dancer',
'Bard','Mime','Knight','Archer','Black Mage','White Mage',
'Geomancer','Dragoon','Summoner','Orator','Onion Knight','Dark Knight']

const deleteCharacter = ({ _id }) => CharacterCollection.remove(_id)

let selectedCharacter = CharacterCollection.findOne()


 const chooseNew = ({_id}) => {
   selectedCharacter = CharacterCollection.findOne({_id})
  

 }






console.log(selectedCharacter)

export const CharList = () =>{
  const characters = useTracker(() => {
    return CharacterCollection.find().fetch()
  })





return (
selectedCharacter &&
<div>

{/* 
 <h2>character is {selectedCharacter.name}</h2>  */}
 <img src={selectedCharacter.jobProfileImg} width='9%' alt="" />
 <div><h2>{selectedCharacter.job} <img src={selectedCharacter.jobClassImg} alt="" /></h2></div>



<h1></h1>
 {console.log(selectedCharacter)}
<ul>{characters.map(
  character =>
  <div>
    
    <button onClick= {() => deleteCharacter(character)}>Delete</button>
  <ul key={character._id}>
  <button onClick={ () => [chooseNew({_id:character._id, _id:character._id}) ]}>find </button>
    <h2>{character._id}</h2>
    <h2>{character.name}</h2>
    <h2>{character.job}</h2>
    
  </ul>
  </div> 
)}</ul>
<h2>character is {selectedCharacter.name}</h2>
</div>

);
}
