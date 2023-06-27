import { Router } from 'express';

const router = Router();

router.get('/',function(request,response) {
    return response.json({message: 'ola'});
});

router.post('/teste',function(request,response) {
    console.log(request.body);
    return response.json({message: 'ola'});
});

export{router};