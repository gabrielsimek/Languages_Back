import Language from './Language.js';
import User from './User.js';

User.hasMany(Language);
Language.belongsTo(User);
