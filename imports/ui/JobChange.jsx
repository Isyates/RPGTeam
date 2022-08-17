import React, { useState } from 'react';
import { useTracker, useFind } from 'meteor/react-meteor-data';
import { CharacterCollection } from '../api/CharacterData';
import { CharacterDetail } from './CharacterDetail';
import {LinksCollection} from '../api/links'

jobOptions = ['Squire','Chemist','Monk','Thief','Time Mage',
'Mystic','Samurai','Ninja','Arithmetician',
'Mime','Knight','Archer','Black Mage','White Mage',
'Geomancer','Dragoon','Summoner','Orator','Onion Knight','Dark Knight']

export const JobChange = ({charas,setCharas}) =>{
    

    const useTracker = (value) => {
        let newJob = value
        let newjobTrim = newJob.replace(' ', '')
        console.log(newjobTrim)
        console.log(newJob)

        CharacterCollection.update ({_id:charas._id}, 
            {$set:{
            job:newJob,
            jobClassImg: `http://www.videogamesprites.net/FinalFantasyTactics/Jobs/${newjobTrim}/${newjobTrim}1M-SW.gif`,
            jobProfileImg:`http://www.videogamesprites.net/FinalFantasyTactics/Jobs/${newjobTrim}/${newjobTrim}1M.gif`,
            }}
            )     
    }

if (!charas) {
    return(
        <div>Select a Character to Job Change</div>
    )
}else{
    
return (


<div>    

    <div class='box' id='jobChangeBox' >
    <div class='box title is-3 has-text-centered' id='jobChangeTitleBox'>
        Available Promotions
    </div>
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Squire/Squire1M-SW.gif"   id='jobValue' value='Squire' alt="" onClick={() => useTracker('Squire')} />

<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Chemist/Chemist1M-SW.gif" id='jobValue' value='Chemist' alt="" onClick={() => useTracker('Chemist')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Monk/Monk1M-SW.gif"  id='jobValue' value='Monk' alt="" onClick={() => useTracker('Monk')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/TimeMage/TimeMage1M-SW.gif" id='jobValue' value='Time Mage' alt="" onClick={() => useTracker('Time Mage')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Mystic/Mystic1M-SW.gif" id='jobValue' value='Mystic' alt="" onClick={() => useTracker('Mystic')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Samurai/Samurai1M-SW.gif" id='jobValue' value='Samurai' alt="" onClick={() => useTracker('Samurai')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Ninja/Ninja1M-SW.gif" id='jobValue' value='Ninja' alt="" onClick={() => useTracker('Ninja')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Arithmetician/Arithmetician1M-SW.gif" id='jobValue' value='Arithmetician' alt="" onClick={() => useTracker('Arithmetician')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Mime/Mime1M-SW.gif" id='jobValue' value='Mime' alt="" onClick={() => useTracker('Mime')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Knight/Knight1M-SW.gif" id='jobValue' value='Knight' alt="" onClick={() => useTracker('Knight')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Archer/Archer1M-SW.gif" id='jobValue' value='Archer' alt="" onClick={() => useTracker('Archer')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/BlackMage/BlackMage1M-SW.gif" id='jobValue' value='Black Mage' alt="" onClick={() => useTracker('Black Mage')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/WhiteMage/WhiteMage1M-SW.gif" id='jobValue' value='White Mage' alt="" onClick={() => useTracker('White Mage')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Geomancer/Geomancer1M-SW.gif" id='jobValue' value='Geomancer' alt="" onClick={() => useTracker('Geomancer')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Dragoon/Dragoon1M-SW.gif" id='jobValue' value='Dragoon' alt="" onClick={() => useTracker('Dragoon')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Summoner/Summoner1M-SW.gif" id='jobValue' value='Summoner' alt="" onClick={() => useTracker('Summoner')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Orator/Orator1M-SW.gif" id='jobValue' value='Orator' alt="" onClick={() => useTracker('Orator')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/OnionKnight/OnionKnight1M-SW.gif" id='jobValue' value='Onion Knight' alt="" onClick={() => useTracker('Onion Knight')} />
<img src="http://www.videogamesprites.net/FinalFantasyTactics/Jobs/DarkKnight/DarkKnight1M-SW.gif" id='jobValue' value='Dark Knight' alt="" onClick={() => useTracker('Dark Knight')} />

</div>
</div>
)
}
    
}