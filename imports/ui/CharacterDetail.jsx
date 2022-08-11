import React, { useState } from 'react';
import { CharacterCollection } from '../api/CharacterData';
import { useTracker } from 'meteor/react-meteor-data';
import { CharList } from './CharacterList';

export const CharacterDetail = () =>{
    const character = useTracker((_id) => {
        return CharacterCollection.find(_id).fetch(_id)
})

return (

    <div>
        
     <h1>This is {character.name}</h1>
    <h2>Their Job is {character.job}</h2>
    </div>

)

}
