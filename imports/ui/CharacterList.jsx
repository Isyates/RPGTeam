import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CharacterCollection } from '../api/CharacterData';


const deleteCharacter = ({ _id }) => CharacterCollection.remove(_id)

var selectedCharacter = CharacterCollection.findOne({})

 const chooseNew = ({_id}) => {
  selectedCharacter = CharacterCollection.findOne({_id:_id})
  

}

console.log(selectedCharacter)

export const CharList = () =>{
  const characters = useTracker(() => {
    return CharacterCollection.find().fetch()
  })




return (
<div>
 <h1>testing</h1>


 <h2>character is {selectedCharacter.name}</h2>
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
    <img src={character.jobProfileImg} alt="" />
  </ul>
  </div> 
)}</ul>
<h2>character is {selectedCharacter.name}</h2>
</div>

);
}