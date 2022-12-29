import Client from './src/core/client/main';
import Database from './src/database/main';

async function Init() {
	await Database();
	await new Client();
}

Init();