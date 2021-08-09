import Sequelize  from 'sequelize';
import db from '../utils/db.js';

class User extends Sequelize.Model {}

User.init(
  {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
  
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true
      
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

