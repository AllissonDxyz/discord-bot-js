import CommandsController from '../../core/commands/main';
import Client from '../../database/schemas/client';

export default class MessageCreate {
	public name:string = "messageCreate";

	async listener(message, bot): Promise<void> {
		const client: Client = await Client.findOne({idB: bot.user.id});
		if(!client) {
			return;
		}

        const prefixo: string = client.prefixo;
        const messageArray = message.content.split(" ");
        if(!messageArray[0].toLowerCase().startsWith(prefixo)) return;
        const command = messageArray[0].split(prefixo)[1];
        const args = messageArray.slice(1);

        new CommandsController(bot, message, command, args);
	}
}