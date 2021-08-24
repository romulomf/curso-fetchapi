import { Client } from '../models/index';

class ClientController {
	public constructor() {
		// construtor padrão
	}

	public findAll(): void {
		let clients: Client[] = [];
		fetch('http://localhost:8080/profiles', {
			method: 'GET',
			mode: 'cors',
			keepalive: false
		})
			.then(response => response.json())
			.then(data => data.map((c: any) => new Client(c.name, c.mail, c.id)))
			.then(data => data as Client[])
			.then(data => {
				data.forEach(c => {
					console.log(`Client:\tId = ${c.Id}, Name = ${c.Name}, Mail = ${c.Mail}`);
				});
			});
	}
}

export default ClientController;