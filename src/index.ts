import '@fontsource/montserrat';
import '@fontsource/pacifico';

import { ClientRepository } from './repository';
import { ClientController } from './controller';

import './css/index.css';

import './img/dog.svg';

const repository: ClientRepository = new ClientRepository();
const controller: ClientController = new ClientController(repository);

controller.view();