import { DateTime } from "luxon";
import messageDelete from "./plugins/messageDelete";
const colors = require("colors");

export default class Utils {
	static logger(message, { error = false, warning = false } = {}) {
		const date = DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS);

		if (error) {
			console.error(`[${date}]`.gray + (" " + message).red);
		} else if (warning) {
			console.error(`[${date}]`.gray + (" " + message).yellow);
		} else {
			console.log(`[${date}]`.gray + (" " + message).green);
		}
	}

	static messageDelete(msg, time, msga) {
		return messageDelete(msg, time, msga);
	}
}
