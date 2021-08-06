import Sequelize  from 'sequelize';
import db from '../utils/db.js';

class Language extends Sequelize.Model {}

Language.init(
  {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    developer: {
      type: Sequelize.DataTypes.STRING
    },
    designedBy: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
      
    },
    website: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    firstAppeared: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: false
    },
    logo: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }
  },
 
  {
    underscored: true,
    sequelize: db,
    modelName: 'Language'
  }
    
);

export default Language;

