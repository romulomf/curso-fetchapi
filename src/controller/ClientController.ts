import { Client } from '../models/index';
import { ClientRepository } from '../repository/index';

class ClientController {

	private _repository: ClientRepository;

	public constructor(repository: ClientRepository) {
		this._repository = repository;
	}

	public view(): void {
		const container: HTMLElement | null = document.getElementById('clients');
		const tableItems = container as HTMLTableSectionElement;

		const promise: Promise<Client[]> = this._repository.findAll();

		const template: HTMLTemplateElement = document.getElementsByTagName('template')[0];
		
		if(tableItems != null) {
			promise.then(clients => {
				clients.forEach(c => {
					/**
					 * DocumentFragment é a representação do modelo no HTML. Ele significa uma porção de marcação
					 * que está anexada na árvore DOM, pois foi criada a partir do modelo. É dentro dessa porção
					 * avulsa que é feita a manipulação para que depois que estiver completa a transformação com
					 * os dados, que são por fim inseridos na árvore que compõe a estrutura da página.
					 */
					const fragment: DocumentFragment = template.content.cloneNode(true) as DocumentFragment;
					const line: HTMLTableRowElement = fragment.querySelector('tr') as HTMLTableRowElement;
					if (c.Id != undefined) {
						line.setAttribute('data-id', c.Id.toString());
					}
					const name: HTMLTableCellElement = line.querySelectorAll('td')[0];
					const mail: HTMLTableCellElement = line.querySelectorAll('td')[1];
					name.appendChild(document.createTextNode(c.Name));
					mail.appendChild(document.createTextNode(c.Mail));
					const changeItem: HTMLAnchorElement | null = line.querySelector('[data-action=change]');
					const deleteItem: HTMLAnchorElement | null = line.querySelector('[data-action=delete]');
					if (changeItem != null) {
						changeItem.href = `http://localhost:8080/profiles/change/${c.Id}`;
					}
					if (deleteItem != null) {
						deleteItem.href = `http://localhost:8080/profiles/delete/${c.Id}`;
					}
					tableItems.append(line);
				});
			})
		}
	}
}

export default ClientController;