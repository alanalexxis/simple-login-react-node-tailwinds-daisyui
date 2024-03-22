import express from "express";
import cors from "cors";
//importamos la conexion a la bd
import db from "./database/db.js";

//importamos nuestro enrutador
import UserRoutes from "./routes/routesUser.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", UserRoutes);

try {
  await db.authenticate();
  console.log("Base de datos conectada");
} catch (error) {
  console.log(`El error de conexión es:${error}`);
}

//conexion local
app.listen(8000, () => {
  console.log("Listening on port 8000");
});
