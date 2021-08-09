import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export default class UserService {
  static async create({ name, email, password }) {
    const passwordHash = await bcrypt.hash(password, 8);
    const user = await User.create({ 
      name,
      email,
      password: passwordHash
    });
    return { name: user.name, email: user.email };
  }
}
