import config from '../config/config';
import { Sequelize } from 'sequelize'
import "../models/tasks.model"

const sequelize = new Sequelize(config.DD_DATABASE_URL)

class db {
	static async connect() {
		try {
			await sequelize.authenticate()
			console.log('db connect')
		} catch (err) {
			if (err instanceof Error) {
				console.log(err.message);
			} else {
				console.log('Unexpected error', err);
			}
		}
	}
}

export default { db, sequelize }
