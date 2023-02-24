import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder } from 'discord.js';

export default class Banner {
	public config = {
		data: new SlashCommandBuilder()
		.setName('banner')
		.setDescription('Exibe o banner de um usuário')
		.addUserOption(option => 
			option
			.setName("membro")
			.setDescription("User")
			.setRequired(false))
	};

	async execute({bot, interaction, args, utils}) {
		const member = bot.users.cache.get(args[0]) || interaction.user;
		const banner = member.bannerURL({ dynamic: true, size: 1024 });

		if(!banner) {
			return interaction.reply("Este usuário não possui banner.");
		}
		
		const embed = new EmbedBuilder()
		  .setColor(bot.color)
		  .setTitle(`Banner de ${member.username}`)
		  .setImage(avatar)
		  .setFooter({text: interaction.user.tag, iconURL: interaction.user.avatarURL({dynamic: true})});
		interaction.followUp({embeds: [ embed]});
	}
}