import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CharacterCollection } from '../api/CharacterData';
import { CharacterDetail } from './CharacterDetail';

const deleteCharacter = ({ _id }) => CharacterCollection.remove(_id)
const sendCharacterdata = ({_id}) => CharacterCollection.find(_id)

export const CharList = () =>{
  const characters = useTracker(() => {
    return CharacterCollection.find().fetch()
  })



return (
<div>
 <h1>testing</h1>
<ul>{characters.map(
  character =>
  <div>
    <button onClick= {() => deleteCharacter(character)}>Delete</button>
    <button onClick={() => CharacterDetail({sendCharacterdata})}> Show Character</button>
  <ul key={character._id}>
    <h2>{character._id}</h2>
    <h2>{character.name}</h2>
    <h2>{character.job}</h2>
    <img src={character.jobProfileImg} alt="" />
  </ul>
  </div> 
)}</ul>
</div>
);
}