import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
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

  static async authorize({ email, password }){
    console.log(email, password);
    const user = await User.findOne({
      where: { 
        email
      }
    });
    if(!user) {
      throw new Error('Invalid email/password');
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);
    if(!passwordsMatch) {
      throw new Error('Invalid email/password');
    }
    return { 
      name: user.name,
      email: user.email
    };
  }

  static authToken(user) {
    return jwt.sign(user, process.env.APP_SECRET, {
      expiresIn: '24h'
    });
  }
}


// authToken() {
//   return jwt.sign(this.toJSON(), process.env.APP_SECRET, {
//     expiresIn: '24h'
//   });
// }
