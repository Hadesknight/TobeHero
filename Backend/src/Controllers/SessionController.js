import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connection from '../database/connection';
import authConfig from '../config/authConfig';

export default {
  async store(req, res) {
    const { email, password } = req.body;

    try {
      const ong = await connection('ongs')
        .where('email', email)
        .select('*')
        .first();

      const collab = await connection('collabs')
        .where('email', email)
        .select('*')
        .first();

      if (!ong && !collab) {
        return res.status(401).json({ err: 'User not Found' });
      }

      if (ong) {
        const checkPassword = await bcrypt.compare(password, ong.password_hash);
        if (!checkPassword) {
          return res.status(401).json({ err: 'Incorrect Password' });
        }

        const { id, name, whatsapp } = ong;

        return res.json({
          user: {
            id,
            name,
            email,
            whatsapp,
            admin: true,
          },
          token: jwt.sign({ id, name }, authConfig.secret, {
            expiresIn: authConfig.expiresIn,
          }),
        });
      }

      if (collab) {
        const checkPassword = await bcrypt.compare(
          password,
          collab.password_hash
        );
        if (!checkPassword) {
          return res.status(401).json({ err: 'Incorrect Password' });
        }

        const { id, name } = collab;

        return res.json({
          user: {
            id,
            name,
            email,
          },
          token: jwt.sign({ id, name }, authConfig.secret, {
            expiresIn: authConfig.expiresIn,
          }),
        });
      }

      return true;
    } catch (err) {
      return res.status(400).json({ err });
    }
  },
};
