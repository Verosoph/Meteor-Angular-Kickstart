import { CollectionObject } from './collectionObject.model';

export interface Userboard extends CollectionObject {
    userId: string,
    entries: [BoardEntry]
}

interface BoardEntry {
    createdAt: Date,
    public: boolean,
    content: string
}