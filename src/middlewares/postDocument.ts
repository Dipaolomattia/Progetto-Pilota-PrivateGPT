import {Request, Response } from "express";
import { ModelService } from "../services/modelService"; // Importa UserService
const modelService = new ModelService();
export async function createdModel(
    req: Request,
    res: Response,
){
    try{
        const documents  = await modelService.createModel(req.body.documentIds,req.body.modelName,req.body.description);
        res.status(200).json({success: true, data: documents});
    }
    catch(error){
        res.status(422).json({
            success: false,
            message: "Errore durante il recupero dei dati"})
        }
        
}

   



