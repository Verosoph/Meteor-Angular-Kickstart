import { Meteor } from 'meteor/meteor';
import * as _ from "lodash";

import { Room } from '../models/room.model';
import { Rooms } from '../collections/room.collection';

Meteor.methods({

    addRoom: function (roomObj: Room) {
        check(roomObj, Object);

        if(Meteor.isServer) {
            let room = Rooms.collection.findOne({name: roomObj.name});
            if(typeof room === typeof undefined) {
                Rooms.collection.insert(roomObj);
                return true
            }
            else {
                return false
            }
        }
    },

    updateRoom: function (roomObj: Room) {
        check(roomObj, Object);

        if(Meteor.isServer) {
            Rooms.collection.update({_id: roomObj._id}, roomObj);
            return true
        }
    },

    joinRoom: function (roomObj: Room, userId: string) {
        check(roomObj, Object);

        if(Meteor.isServer) {

            console.log("Join Room");

            var mate = {
                userId: userId,
                joinedAt: new Date()
            }

            let room: Room = Rooms.collection.findOne(roomObj._id);
            if(typeof room.roommates === typeof undefined) {
                console.log("empty");
                room.roommates = [mate];
            }
            else {
                console.log("not empty");
                room.roommates.push(mate);
            }

            Rooms.collection.update({_id: roomObj._id}, room);

            Meteor.users.update({_id: userId}, {
                $set: {
                    room: {
                        roomId: roomObj._id,
                        joinedAt: new Date()
                    }
                }
            });
        }
    },

    leaveRoom: function(roomObj: Room, userId: string ) {
        check(roomObj, Object);
        check(userId, String);

        if(Meteor.isServer) {

            console.log("leave room");
            let room: Room = Rooms.collection.findOne(roomObj._id);

            let index = _.findIndex(room.roommates, function (room) {
                return room.userId == userId;
            });

            room.roommates.splice(index,1);

            Rooms.collection.update({_id: roomObj._id}, room);
            Meteor.users.update({_id: userId}, {
                $unset: {
                    room: ""
                }
            });
        }
    }

})