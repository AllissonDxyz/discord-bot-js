import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder } from 'discord.js';

export default class Avatar {
	public config = {
		data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('veja o avatar de um membro')
		.addUserOption(option => 
			option
			.setName("membro")
			.setDescription("User")
			.setRequired(false)),
	};

	async execute({bot, interaction, args, utils}) {
		const member = bot.users.cache.get(args[0]) || interaction.user;
		const avatar = member.avatarURL({ dynamic: true, size: 1024 });
		
		const embed = new EmbedBuilder()
		  .setColor(bot.color)
		  .setTitle(`Avatar de ${member.username}`)
		  .setImage(avatar)
		  .setFooter({text: interaction.user.tag, iconURL: interaction.user.avatarURL({dynamic: true})});
		interaction.followUp({embeds: [ embed]});
	}
}