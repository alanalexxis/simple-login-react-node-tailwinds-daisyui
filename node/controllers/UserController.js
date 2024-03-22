//importamos el modelo
import userModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.findAll({});
    res.json(
      users.map((user) => ({
        id: user.id,
        nombre: user.nombre,
        username: user.username,
        correo: user.correo,
        password: user.password,
      }))
    );
  } catch (error) {
    res.json({ message: error.message });
  }
};

//mostrar un registro

export const getUser = async (req, res) => {
  try {
    const user = await userModel.findAll({
      where: { id: req.params.id },
    });
    res.json(user[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//crear un registro

// Función para crear un nuevo usuario
export const createUser = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const { correo, nombre, password, username } = req.body;

    // Cifrar la contraseña antes de almacenarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10); // 10 es el número de saltos

    // Crear un nuevo usuario con la contraseña cifrada
    await userModel.create({
      correo,
      nombre,
      password: hashedPassword,
      username,
    });

    // Responder con éxito
    res.status(201).json({ message: "Usuario creado correctamente" });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ message: "Error al crear usuario." });
  }
};
//actualizar un registro

export const updateUser = async (req, res) => {
  try {
    await userModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "User actualizado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//eliminar un registro

export const deleteUser = async (req, res) => {
  try {
    await userModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "User eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
