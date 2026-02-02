import { Request, Response } from 'express';


export class Auth{
    public saludo(req:Request, res:Response){
        res.status(200).json({
            msg:'saludos'
        })
    }
}