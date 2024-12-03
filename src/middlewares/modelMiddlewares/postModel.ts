import { NextFunction, Request, Response } from "express";
import { ModelService } from "../../services/modelService"; // Importa UserService

const modelService = new ModelService();
export async function postmodel(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    //da modificare sicuramente
   // const newModel = await modelService.createModel(req.body);
    //res.status(201).json({ success: true, data: newModel });
  } catch (error) {
    console.error("Errore durante la creazione del modello:", error);
    res.status(500).json({
      success: false,
      message: "Errore durante la creazione del modello",
    });
  }
  next();
}

