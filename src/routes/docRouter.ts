import express from "express";
import {createdModel} from "../middlewares/postDocument";
const router = express.Router();

const mockDocuments = {
  object: "document_collection",
  model: "document_model_v1",
  data: [
    {
      object: "document_1",
      doc_id: "12345",
      doc_metadata: {
        filename: "document1.pdf",
        page_label: 1
      }
    },
    {
      object: "document_2",
      doc_id: "67890",
      doc_metadata: {
        filename: "document2.pdf",
        page_label: 2
      }
    }
  ]
};

router.get("/getAllDocuments",(req, res) => {
    res.json(mockDocuments);
  });

// questo non dovrebbe andare qua ma nel postmodel
  router.post("/postmodel",createdModel);

export default { router };
