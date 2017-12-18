import { Meteor } from 'meteor/meteor';

import './imports/publications/users.publication';
import { setAdmin } from './imports/dummydata/user.dummydata';

Meteor.startup(() => {
    setAdmin();
});