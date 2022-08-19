import { Counter } from './Components/counter/Counter'
import Layout from './Components/layout/base/Layout'
import Navbar from './Components/layout/navbar/Navbar'
import Todo from './Components/todo/Todo'

const App = () => {
	return (
		<Layout>
			<Todo />
		</Layout>
	)
}

export default App
