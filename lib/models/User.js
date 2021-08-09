import Sequelize  from 'sequelize';
import db from '../utils/db.js';

class User extends Sequelize.Model {}

User.init(
  {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
      
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }
  },
 
  {
    underscored: true,
    sequelize: db,
    modelName: 'User'
  }
    
);

export default User;

