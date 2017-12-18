import { Meteor } from 'meteor/meteor';

interface Options {
    [key: string]: any;
}

Meteor.publish("userdata", function (userId) {
    return Meteor.users.find(userId, {
        fields: {
        }
    });
});

Meteor.publish("allUsers", function () {
    return Meteor.users.find();
})

Meteor.publish("username", function (userId) {
    return Meteor.users.find({_id: userId},
        {fields: {'username': 1}});
});

Meteor.publish("usernames", function () {
    return Meteor.users.find({fields: {'usernames': 1}});
})