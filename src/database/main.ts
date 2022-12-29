import mongoose from "mongoose";
import utils from '../utils/main';
import "dotenv/config";

export default async function ConnecteDB() {
	const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		serverSelectionTimeoutMS: 60000,
		keepAlive: true,
		keepAliveInitialDelay: 300000,
	};

	const db = mongoose.connection;
	const uri = process.env.MONGO_DB_URI;

	if(!uri) {
		utils.logger("Não foi possivel encontrar o uri do mongoDB, tente novamente.", { error: true });
		return process.exit();
	}

	db.on("error", async(error) => {
		utils.logger(error, { error: true });
	});

	db.on("connected", async() => {
		utils.logger("Database conectada com sucesso.");
	});

	mongoose.set('strictQuery', true);
	await mongoose.connect(uri, options);
}
