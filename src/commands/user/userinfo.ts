import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder } from 'discord.js';
import { DateTime } from "luxon";

export default class Banner {
  public config = {
    data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Exibe as infos de um usuário')
    .addUserOption(option => 
      option
      .setName("membro")
      .setDescription("User")
      .setRequired(false))
  };
  async execute({bot, interaction, args, utils}) {
    const member = bot.users.cache.get(args[0]) || interaction.user;
    const date = DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS);

    const embed = new EmbedBuilder()
      .setAuthor({name: `${member.username}`, iconURL: member.avatarURL({ dynamic: true })})
      .setColor(bot.color)
      .setThumbnail(member.avatarURL({ dynamic: true }))
      .addFields(
        { name: `👤 UserName:`, value: `\`${member.tag}\`` },
        { name: `🔖 ID do usuario`, value: `\`${member.id}\`` },
        { name: `⏱ Conta criada em:`, value: `*${date}*` },
        { name: `⌛ Entrou em:`, value: `${date}` }
      )
      .setFooter({text: interaction.user.tag, iconURL: interaction.user.avatarURL({ dynamic: true })})
    interaction.followUp({embeds: [embed]});
  }
}