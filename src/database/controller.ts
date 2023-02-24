import Utils from "../utils/main";
import Guild from "./schemas/guild";
import User from "./schemas/user";
import Client from "./schemas/client";
import Command from "./schemas/command";

export default class DatabaseController {
	static async create(type: string, params: object) {
		switch (type) {
			case "guild":
				{
					const { id, name, botId } = params;
					if (!id || !name || !botId) {
						return Utils.logger(
							"Não foi possivel encontrar os parametros para criação do banco de dados(guild)",
							{ error: true }
						);
					}
					await Guild.create({
						idS: id,
						name,
						botId,
					});
				}
				break;
			case "user":
				{
					const { id, guildId } = params;
					if (!id || !guildId) {
						return Utils.logger(
							"Não foi possivel encontrar os parametros para criação do banco de dados(user)",
							{ error: true }
						);
					}
					await User.create({
						idS: guildId,
						idU: id,
					});
				}
				break;
			case "client":
				{
					const { id, name } = params;
					if (!id || !name) {
						return Utils.logger(
							"Não foi possivel encontrar os parametros para criação do banco de dados(client)",
							{ error: true }
						);
					}
					await Client.create({
						idB: id,
						name,
						status: ["Prefixo !"],
					});
				}
				break;
			case "command": {
				const { name } = params;
				if (!name) {
					return Utils.logger(
						"Não foi possivel encontrar os parametros para criação do banco de dados(command)",
						{ error: true }
					);
				}
				await Command.create({
					name,
				});
			} break;
		}
	}
}
