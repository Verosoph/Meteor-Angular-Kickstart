import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Userboard } from '../models/userboard.model';

export const Userboards = new MongoObservable.Collection<Userboard>('userboards');

if(Meteor.isClient) {
    Meteor.subscribe("userboards");
}