import { Meteor } from 'meteor/meteor';
import * as _ from "lodash";

import { Userboard } from '../models/userboard.model';
import { Userboards } from '../collections/userboard.collection';

Meteor.methods({

    addEntry: function(userBoardObj: Userboard) {
        check(userBoardObj, Object);

        if(Meteor.isServer) {
            Userboards.update({_id: userBoardObj._id}, userBoardObj,{upsert: true});
        }
    },

    editEntry: function(userBoardObj: Userboard) {
        check(userBoardObj, Object);

        if(Meteor.isServer) {
            Userboards.update({_id: userBoardObj._id}, userBoardObj);
        }
    }

});