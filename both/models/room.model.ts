import { CollectionObject } from './collectionObject.model';

export interface Room extends CollectionObject {
    name: string,
    password?: string,
    imgurl?: string
    createdAt: Date,
    editedAt: Date,
    roommates?: [Mate]
}

interface Mate {
    userId: string,
    joinedAt: Date
}