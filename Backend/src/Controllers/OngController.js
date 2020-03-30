import bcrypt from 'bcryptjs';
import generateUniqueId from '../utils/generateUniqueId';
import connection from '../database/connection';

export default {
  async store(req, res) {
    const { name, email, whatsapp, city, uf, password } = req.body;

    try {
      const id = generateUniqueId();

      const password_hash = await bcrypt.hash(password, 8);

      console.log(password_hash);

      await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
        password_hash,
      });

      return res.json(id);
    } catch (err) {
      return res.status(400).json({ err });
    }
  },

  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      await connection('ongs').where('id', id).delete();

      return res.status(204).send();
    } catch (err) {
      return res.status(err.status).send(err);
    }
  },
};
