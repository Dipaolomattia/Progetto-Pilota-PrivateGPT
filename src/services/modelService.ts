import {Model} from '../entities/model';
import {AppDataSource} from '../data-source'
//const privateGPTAPI='http://10.11.13.50:8001/v1/ingest/text'
interface Modell{
    documentIds:string[],
    modelName:string;

}

export class ModelService{
    async createModel(id:string[],modelname:string,description:string){
        try{
        const newModel :Model = new Model();
        newModel.documentsId=id;
        newModel.name=modelname;
        newModel.description=description;
        const createdModel = await AppDataSource.manager.insert(Model, newModel);
        const returnModel = await AppDataSource.manager.findOne(Model, {
            where: { id: createdModel.identifiers[0].id },
          }); 
        return returnModel;
        }catch(error){
        console.error("Errore durante la creazione dell'utente:", error);
        }
    }
    async deleteModel(id:number){
        const modelSearched= await AppDataSource.manager.delete(Model,id);
        return modelSearched;
    }
    async getAllModel(){
        const allModel= await AppDataSource.manager.find(Model);
        return allModel;
    }
    async validateModel(id:string[]){
       const model = await this.getAllModel();
        for(let i=0;i<model.length;i++){
            if(model[i].documentsId===id){
             return true;
            }
        }
        return false;

    }
    async getModelById(id:number){
        const modelSearched= await AppDataSource.manager.findOne(Model,{ where:{  id  } });
        return modelSearched;
    }

    // async queryAI(id:number,userInput:string){
    //     const model = await AppDataSource.manager.findOne(Model, { where: { id  } } );
    //    //qui ci andrà la post che faccio a privateGPT
    //    const response = await fetch(`${privateGPTAPI}`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         query: userInput,
    //         document_ids:  model?.documentsId,
    //     }),
    //   });

    // return response.json();
    // }


}

