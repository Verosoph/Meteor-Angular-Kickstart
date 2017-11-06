import { Roles } from 'meteor/alanning:roles';

export function setAdmin() {

    if(Accounts.findUserByUsername('admin') == null) {
        // Create Admin Account

        var id = Accounts.createUser({
            email: 'jow@tradebyte.biz',
            username: 'jow',
            password: 'admin123'
        });

        //  add Admin to Role
        Roles.addUsersToRoles(id, ['admin']);
    }

}