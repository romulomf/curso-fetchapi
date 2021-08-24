import '@fontsource/montserrat';
import '@fontsource/pacifico';

import { ClientController } from './controller';

import './css/index.css';

import './img/dog.svg';

const clientController = new ClientController();
clientController.findAll();