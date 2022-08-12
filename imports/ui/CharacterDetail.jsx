import React, { useState } from 'react';
import { CharacterCollection } from '../api/CharacterData';
import { useTracker } from 'meteor/react-meteor-data';

// export const CharacterDetail = (CharId) => {

//   const char = useTracker(() =>  {CharacterCollection.findOne({_id:'N9u3bw7r7SGmSbknY'})
// return CharacterDetail
// }) 
// }


const CharacterDetail = () => useTracker(() => {

   CharacterCollection.findOne({_id:'N9u3bw7r7SGmSbknY'})

  return CharacterDetail
},[CharId])