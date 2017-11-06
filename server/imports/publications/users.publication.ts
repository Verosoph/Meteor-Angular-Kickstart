import { Meteor } from 'meteor/meteor';

interface Options {
    [key: string]: any;
}

Meteor.publish("userdata", function (userId) {
    return Meteor.users.find(userId, {
        fields: {
            room: 1
        }
    });
});

Meteor.publish("allUsers", function () {
    return Meteor.users.find();
})