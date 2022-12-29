import utils from "../../utils/main";

export default class CommandsController {
	constructor(bot, message, command, args, { slash = false } = {}) {
		this.isSlash = slash ? true : false;

		if (slash) {
			this.responserSlash(bot, message, command, args);
		} else {
			this.responser(bot, message, command, args);
		}
	}

	async getCommand(bot, commandName): Promise<function> {
		let thisCommand;

		if (this.isSlash) {
			thisCommand = bot.slashCommands.get(commandName);
		} else {
			thisCommand = bot.commands.get(commandName);
			if (!thisCommand) {
				const isAliase = bot.commands.get(bot.aliases.get(commandName));
				if (isAliase) {
					thisCommand = isAliase;
				}
			}
		}

		return thisCommand;
	}

	private async responser(bot, message, command, args): Promise<void> {
		const thisCommand = await this.getCommand(bot, command);
		if (thisCommand) thisCommand({ bot, message, args, utils });
	}

	private async responserSlash(
		bot,
		interaction,
		command,
		args
	): Promise<void> {
		const thisCommand = await this.getCommand(bot, command);
		if (thisCommand) thisCommand.execute({ bot, interaction, args, utils });
	}
}
