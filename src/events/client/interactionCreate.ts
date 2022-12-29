import CommandsController from "../../core/commands/main";
import Client from "../../database/schemas/client";
import utils from "../../utils/main";

export default class InteractionCreate {
	public name: string = "interactionCreate";

	async listener(interaction, bot): Promise<void> {
		if (!interaction.isCommand()) return;
		await interaction.deferReply().catch((err) => err);

		const client: Client = await Client.findOne({ idB: bot.user.id });
		if (!client) {
			return;
		}

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

		new CommandsController(bot, interaction, commandName, args, { slash: true });
	}
}
