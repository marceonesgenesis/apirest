import { Router } from 'express';

import {CidadesController} from './../controllers'


const router = Router();

router.get('/',function(request,response) {
    return response.json({message: 'ola tudo ok'});
});

router.post('/cidades',CidadesController.create);

export{router};