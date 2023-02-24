import utils from "../../utils/main";

export default class CommandsController {
	constructor(
		bot, message, command, args
	) {
		this.reply(bot, message, command, args);
	}

	async getCommand(bot, commandName): Promise<function> {
		return bot.commands.get(commandName);
	}

	async reply(bot, interaction, command, args) {
		const thisCommand = await this.getCommand(bot, command);
		if (thisCommand) {
			/*const cmd = await Command.findOne({ name: command });
			if (!cmd) {
				DatabaseController.create("command", { name: command });
			}*/
			thisCommand.execute({ bot, interaction, args, utils });
		}
	}
}
