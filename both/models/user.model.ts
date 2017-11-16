export interface User extends Meteor.User {
    room?: Room,
}

interface Room {
    roomId: string,
    joinedAt: string
}