import {Request, Response } from "express";
import { DocumentService } from "../services/documentService"; // Importa UserService


const documentService = new DocumentService();

export async function postDoc(
    req: Request,
    res: Response,

){
    try{
        const documents  = await documentService.postDocument(req.body);
        res.status(200).json({success: true, data: documents});

    }
    catch(error){
        res.status(422).json({
            success: false,
            message: "Errore durante il recupero dei dati"})
        }
        
}

   



