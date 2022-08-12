import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CharacterCollection } from '../api/CharacterData';
import { render } from 'react-dom';


const jobChange = ({_id,job}) => {
    CharacterCollection.update(_id, {
      $set: {
        job: EventTarget.value
        // jobProfileImg:
      }
    })
  }

return(
    <div>
<form>
<select onSubmit = {jobChange ({job: 'Squire'})} defaultValue = {"dropDownValue"}>
<option value = "taj" >Taj Mahal</option>
<option value = "china">Great Wall of China</option>
<option value = "chirst" required>Christ the Redeemer Satue</option>
<option value = "machu" disabled>Machu Picchu</option>
<option value = "chichen">Chichen Itza</option>
<option value = "colossem">The Roman Colosseum</option>
<option value = "petra">Petra</option>
</select>
<br></br>
  <input type="submit" value={"Submit"}/>
</form>
</div>
)