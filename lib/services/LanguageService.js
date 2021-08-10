import User from '../models/User.js';
import Language from '../models/Language.js';

export default class LanguageServices {
 
  static async delete (id, userId) {
   
    const languageToDelete = await Language.findByPk(id);
    if(languageToDelete.UserId !== userId) {
      throw new Error('Unauthorized');
    }
    
    await Language.destroy({ where: { id, UserId: userId } });
      
    return languageToDelete;
  }
  
}
