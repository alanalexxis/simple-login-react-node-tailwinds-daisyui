//importamos el modelo
import userModel from "../models/UserModel.js";
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

export const createUser = async (req, res) => {
  try {
    await userModel.create(req.body);
    res.json({
      message: "User creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
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
