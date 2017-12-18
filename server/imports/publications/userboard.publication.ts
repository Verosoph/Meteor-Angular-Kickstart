import { Meteor } from 'meteor/meteor';

import { Userboards } from '../../../both/collections/userboard.collection';

interface Options {
    [key: string]: any;
}

Meteor.publish('userboards', () => Userboards.find({}));

Meteor.publish('userboard', (userboardId: string) => {
    return Userboards.collection.findOne({_id: userboardId});
});