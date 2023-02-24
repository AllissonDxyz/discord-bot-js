import CommandsController from "../../core/commands/main";
import utils from "../../utils/main";
import Guild from "../../database/schemas/guild";
import Client from "../../database/schemas/client";
import User from "../../database/schemas/user";
import DatabaseController from "../../database/controller";

export default class InteractionCreate {
	public name: string = "interactionCreate";

	async listener(interaction, bot) {
		const guild: Guild = await Guild.findOne({ idS: interaction.guild.id });
		const client: Client = await Client.findOne({ idB: bot.user.id });
		const user: User = await User.findOne({ idU: interaction.user.id });

		if (!guild) {
			return DatabaseController.create("guild", {
				id: interaction.guild.id,
				name: interaction.guild.name,
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
				id: interaction.user.id,
				guildId: interaction.guild.id,
			});
		}

		if (!interaction.isCommand()) return;
		await interaction.deferReply().catch((err) => err);

		const { commandName } = interaction;
		const args = [];

		for (let option of interaction.options.data) {
			if (option.type === "SUB_COMMAND") {
				if (option.name) args.push(option.name);
				option.options?.forEach((x) => {
					if (x.value) args.push(x.value);
				});
			} else if (option.value) args.push(option.value);
		}

		new CommandsController(bot, interaction, commandName, args);
	}
}
