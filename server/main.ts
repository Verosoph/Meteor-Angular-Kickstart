import { Meteor } from 'meteor/meteor';

import { loadRooms } from './imports/dummydata/rooms.dummydata';

import './imports/publications/rooms.publication';

Meteor.startup(() => {
    loadRooms();
});