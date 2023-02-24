import { Client, IntentsBitField, ActivityType, Collection } from "discord.js";
import eventsHandler from "../../handlers/events";
import commandsHandler from "../../handlers/commands";
import utils from "../../utils/main";
import "dotenv/config";
import ClientDB from "../../database/schemas/client";
import DatabaseController from "../../database/controller";

export default class ClientController {
	constructor() {
		this.start();
	}

	private async start() {
		const bot: Client = new Client({
			intents: new IntentsBitField(3276799),
		});
		const token: string = process.env.TOKEN;

		if (!token) {
			utils.logger(
				"Token not found.",
				{ error: true }
			);
			return process.exit();
		}

		["events", "commands"].forEach(
			(x) => (bot[x] = new Collection())
		);
		[eventsHandler, commandsHandler].forEach((x) =>
			x(bot)
		);

		bot.login(token)
			.catch((err) => utils.logger(err.message, { error: true }))
			.finally(async () => {
				utils.logger(`${bot.user.tag}(${bot.user.id}) initialized.`);
				this.slashCommands(bot);
				const _client = await ClientDB.findOne({ idB: bot.user.id });
				if (!_client) {
					return DatabaseController.create("client", {
						id: bot.user.id,
						name: bot.user.username,
					});
				}
			});
	}

	private slashCommands(bot) {
		bot.application.commands
			.set(bot.commands.map((c) => c.config.data))
			.catch((err) => utils.logger(err.message, { error: true }));
	}
}
