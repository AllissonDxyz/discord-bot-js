import CommandsController from "../../core/commands/main";
import Guild from "../../database/schemas/guild";
import Client from "../../database/schemas/client";
import User from "../../database/schemas/user";
import Command from "../../database/schemas/command";
import DatabaseController from "../../database/controller";

export default class MessageCreate {
	public name: string = "messageCreate";

	async listener(message, bot) {
		const guild: Guild = await Guild.findOne({ idS: message.guild.id });
		const client: Client = await Client.findOne({ idB: bot.user.id });
		const user: User = await User.findOne({ idU: message.author.id });

		if (!guild) {
			return DatabaseController.create("guild", {
				id: message.guild.id,
				name: message.guild.name,
				botId: bot.user.id,
			});
		}
		if (!client) {
			return DatabaseController.create("client", {
				id: bot.user.id,
				name: bot.user.name,
			});
		}
		if (!user) {
			return DatabaseController.create("user", {
				id: message.author.id,
				guildId: message.guild.id,
			});
		}
	}
}
