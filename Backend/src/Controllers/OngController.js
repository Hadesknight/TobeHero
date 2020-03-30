import generateUniqueId from '../utils/generateUniqueId';
import connection from '../database/connection';

export default {
  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
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
