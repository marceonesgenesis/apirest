/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';

interface ICidade{
    nome: string;
    estado:string;
}

const bodyValidation:yup.Schema<ICidade> = yup.object().shape({
    nome:yup.string().required().min(3),
    estado:yup.string().required().min(3),
});


export const createBodyValidator : RequestHandler = async(req,res,next)=>{
    try{
        await bodyValidation.validate(req.body,{abortEarly:false});
        return next();
    }catch(error){
        const yupError = error as yup.ValidationError;
        const validationErrors: Record<string,string> = {};

        yupError.inner.forEach(error =>{
            if(error.path === undefined) return;
            validationErrors[error.path] = error.message;
        });

        return res.status(400).json({errors:validationErrors});
    }
};


export const create = async (req: Request<{},{},ICidade>,res: Response)=>{
    return res.send('Create');
};