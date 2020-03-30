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

  async index(req, res) {
    const { page = 1 } = req.query;
    try {
      const [count] = await connection('collabs').count();

      const response = await connection('collabs')
        .select('id', 'name', 'email')
        .limit(5)
        .offset((page - 1) * 5);

      res.header('X-Total-Count', count['count(*)']);

      return res.json(response);
    } catch (err) {
      return res.status(400).json({ err: 'error to list collabs' });
    }
  },

  async show(req, res) {},

  async update(req, res) {},

  async delete(req, res) {},
};
