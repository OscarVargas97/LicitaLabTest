import * as models from '../models'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
	models.Task.sync({ force: isDev })
}
export default dbInit 