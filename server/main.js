import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { CharacterCollection } from '/imports/api/CharacterData'
import { CharacterForm } from '/imports/ui/CharacterForm.jsx'

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}


Meteor.startup(() => {


});
