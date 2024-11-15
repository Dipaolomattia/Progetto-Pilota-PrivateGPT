import { AppDataSource } from "../data-source";
import { Document } from "../entities/documento";
//const privateGPTAPI='http://10.11.13.50:8001/v1/ingest/list';
export class DocumentService{
     async getAllDocuments(){
        //const allDocuments = await fetch(`${privateGPTAPI}`);
        const allDocuments= await AppDataSource.manager.find(Document);
        return allDocuments;// Restituisce i dati dei documenti
    };

    async postDocument(document: Document){
        const newDocument= new Document();
        newDocument.object=document.object;
        newDocument.model=document.model;
        const createdUser= await AppDataSource.manager.insert(Document, newDocument);
        return createdUser;
    }
}
