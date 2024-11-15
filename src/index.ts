import { AppDataSource } from "../src/data-source"; // Inizializza il database
import { httpServer } from "./servers/httpServer"; // Importa la funzione che avvia il server
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  // Inizializza il database
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
      httpServer.getInstance().init(); // Avvia il server Express
    })
    .catch((err) => {
      console.error(
        "Error during Data Source initialization or server startup",
        err
      );
      process.exit(1); // Termina l'applicazione se ci sono errori critici
    });
};

main().catch((err) => {
  console.error("Error during application startup", err);
});
