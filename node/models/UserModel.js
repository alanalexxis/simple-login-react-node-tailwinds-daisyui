// importamos la conexion de la bd
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const userModel = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },

  nombre: { type: DataTypes.STRING },
  username: { type: DataTypes.STRING },
  correo: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
});

export default userModel;
