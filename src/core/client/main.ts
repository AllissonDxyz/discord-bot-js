import { Client, IntentsBitField, ActivityType, Collection } from "discord.js";
import commandsHandler from "../../handlers/commands";
import eventsHandler from "../../handlers/events";
import slashCommandsHandler from "../../handlers/slashCommands";
import utils from "../../utils/main";
import "dotenv/config";

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
				"Não foi possivel encontrar o token, tente novamente.",
				{ error: true }
			);
			return process.exit();
		}

		["commands", "events", "slashCommands"].forEach(
			(x) => (bot[x] = new Collection())
		);
		[eventsHandler, commandsHandler, slashCommandsHandler].forEach((x) =>
			x(bot)
		);

		bot.login(token)
			.catch((err) => console.error(err.message))
			.finally(() => {
				utils.logger(`${bot.user.tag}(${bot.user.id}) iniciado.`);
				this.slashCommands(bot);
			});
	}

	slashCommands(bot): void {
		bot.application.commands
			.set(bot.slashCommands.map((c) => c.config.data))
			.catch((err) => utils.logger(err.message, { error: true }));
	}
}
