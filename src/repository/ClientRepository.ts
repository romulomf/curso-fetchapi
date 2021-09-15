import { Client } from '../models/index';

class ClientRepository {

	constructor() {
		// construtor padrão
	}

	/**
	 * Recupera todos os clientes.
	 */
	public async findAll(): Promise<Client[]> {
		const response: Response = await fetch('http://localhost:8080/profiles', {
			method: 'GET',
			mode: 'cors',
			keepalive: false
		})
		const data: any = await response.json();
		return data.map((c: any) => new Client(c.name, c.mail, c.id)) as Client[];
	}
}

export default ClientRepository;