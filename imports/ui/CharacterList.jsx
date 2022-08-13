import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CharacterCollection } from '../api/CharacterData';
import {LinksCollection} from '../api/links'




let selectedId = CharacterCollection.find().fetch()[0]._id

console.log(selectedId)

let selectedCharacter = CharacterCollection.findOne({_id:selectedId})

 export const chooseNew = ({_id}) => {
  
  selectedCharacter = CharacterCollection.findOne({_id:_id})
  

  console.log(selectedCharacter)

}

[0]

const deleteCharacter = ({ _id }) => CharacterCollection.remove(_id)

export const CharList = () =>{
  const characters = useTracker(() => {
    return CharacterCollection.find().fetch()
  })




return (
<div>


 <h2>character is {selectedCharacter.name}</h2>
 <img src={selectedCharacter.jobProfileImg} width="9%" alt="" />
 <div>
 <h3><img src={selectedCharacter.jobClassImg} alt="" />class: {selectedCharacter.job}</h3>
 </div>
 {console.log(selectedCharacter)}
<ul>{characters.map(
  character =>
  <div>
    
    <button onClick= {() => deleteCharacter(character)}>Delete</button>
  <ul key={character._id}>
  <button onClick={ () =>  chooseNew({_id:character._id, _id:character._id}) }>send info</button>
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