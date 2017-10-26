import { Rooms } from '../../../both/collections/room.collection';
import { Room } from '../../../both/models/room.model';

export function loadRooms() {

    if(Rooms.find().cursor.count() === 0) {

        const rooms: Room[] = [
            {
                name: "Hulk",
                password: 'hulksmash',
                imgurl: 'https://rlv.zcache.com/incredible_hulk_logo_classic_round_sticker-rb65b305765fb434e84e36036a1e9c19f_v9wth_8byvr_400.jpg',
                createdAt: new Date(),
                editedAt: new Date()
            },
            {
                name: "Ironman",
                password: 'starkindustries',
                imgurl: 'https://rlv.zcache.com/invincible_iron_man_classic_round_sticker-r2781c2c5810845ccacf05ff2b8914e37_v9wth_8byvr_324.jpg',
                createdAt: new Date(),
                editedAt: new Date()
            }
        ];

        rooms.forEach((room: Room) => Rooms.insert(room));

    }
}