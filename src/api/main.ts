import express, { Router, Request, Response } from 'express';
import config from '../../config/api.json';
import utils from '../utils/main';
import Cors from 'cors';
import 'dotenv/config';

export default class Api {
	public port: number = config.port;
	public app: express = null;

	constructor(bot) {
		this.app = express();
		this.bot = bot;
		this.start(this.app);
	}

	private async start(app): Promise<void> {
		const route = Router();
        const cors = Cors();

        this.app.use(express.json());
        this.app.use(route);
        this.app.use(cors);

        this.app.get('/client', async(req: Request, res: Response) => {
            res.json(this.bot.user);
        });

        this.app.listen(this.port, () => {
            utils.logger(`Api iniciada em http://localhost:${this.port}/`);
        });
	}
}