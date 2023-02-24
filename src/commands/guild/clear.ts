import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder } from 'discord.js';
import emoji from '../../assets/emojis/emojis';

export default class Clear {
	public config = {
		data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('limpe mensagens do chat')
		.addNumberOption(option => 
			option
			.setName("quantidade")
			.setDescription("quantidade de mensagens a serem deletadas")
			.setRequired(true)),
	};

	async execute({bot, interaction, args, utils}) {
		const quantia:number = args[0];
        try {
            interaction.channel.bulkDelete(quantia, true).then(() => {
                const embed = new EmbedBuilder()
	                .setColor(bot.color)
	                .setTitle(`${emoji.certo} \`${quantia}\` Mensagens deletadas.`)
	                .setFooter({text: interaction.user.tag, iconURL: interaction.user.avatarURL({ dynamic: true })})
                interaction.followUp({embeds: [ embed]});
            });
        } catch(err) {}
	}
}