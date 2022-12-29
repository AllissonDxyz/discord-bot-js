import Client from '../../../database/schemas/client';
import User from '../../../database/schemas/user';

export default function importDatabase(bot) {
   bot.database={};

   bot.database.client = Client;
   bot.database.user = User;
}