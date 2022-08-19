export function getAllTasks(uri: string) {
	return fetch(uri)
		.then((respond) => respond.json())
}
