import config from '../config/config';
import { Sequelize } from 'sequelize'
import '../models'


export const sequelizeConnection = new Sequelize(config.DD_DATABASE_URL)


export const connect = async () => {
	try {
		await sequelizeConnection.authenticate()
		console.log('db connected')
	} catch (err) {
		if (err instanceof Error) {
			console.log(err.message);
		} else {
			console.log('Unexpected error', err);
		}
	}
}


export default { connect, sequelizeConnection }
