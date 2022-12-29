import config from '../../../../config/config.json';
import Client from '../../../database/schemas/client';

export default async function ImportConfigs(bot) {
	const client = await Client.findOne({ idB: bot.user.id });
	if(client) {
		bot.color = client.color;
	}
}