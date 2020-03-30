import bcrypt from 'bcryptjs';
import connection from '../database/connection';
import generateUniqueId from '../utils/generateUniqueId';

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    try {
      const id = generateUniqueId();

      const password_hash = await bcrypt.hash(password, 8);

      await connection('collabs').insert({
        id,
        name,
        email,
        password_hash,
      });

      return res.json({ id, name, email });
    } catch (err) {
      return res.status(400).json({ err });
    }
  },

  async index(req, res) {},

  async show(req, res) {},

  async update(req, res) {},

  async delete(req, res) {},
};
