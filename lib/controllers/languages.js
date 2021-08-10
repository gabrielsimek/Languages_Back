import { Router } from 'express';
import Language from '../models/Language.js';
import ensureAuth from '../middleware/ensure-auth.js';
export default Router()
  .post('/', ensureAuth, (req, res, next) => {
    Language.create({ ...req.body, userId: req.userId })
      .then(language => res.send(language))
      .catch(next);  
  })
  .get('/', (req, res, next) => {
    Language.findAll({ attributes: {
      exclude: ['createdAt', 'updatedAt']
    } })
      .then(languages => res.send(languages))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Language.findByPk(req.params.id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    })
      .then(language => res.send(language))
      .catch(next);
  })
  .put('/:id', (req, res, next) => {
    Language.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    })
      .then(([, language]) => res.send(language))
      .catch(next);
  })
  .delete('/:id', async (req, res, next) => {
    //sequalize does not return form a destory, so get item first to send as res
    const languageToDelete = await Language.findByPk(req.params.id);
    Language.destroy({ where: { id: req.params.id } })
      .then(() => res.send(languageToDelete))
      .catch(next);
  });

