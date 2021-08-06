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
      type: Sequelize.DataTypes.STRING
    },
    website: {
      type: Sequelize.DataTypes.STRING
    },
    firstAppeared: {
      type: Sequelize.DataTypes.DATEONLY
    }
  },
 
  {
    underscored: true,
    sequelize: db,
    modelName: 'Language'
  }
    
);

export default Language;

