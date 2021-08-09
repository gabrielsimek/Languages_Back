import app from './lib/app.js';
import db from './lib/utils/db.js';
import User from './lib/models/User.js';
import Languages from './lib/controllers/languages.js';
import './lib/models/index.js';
const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
  db.sync({ force: true });
});

process.on('exit', () => {
  console.log('Goodbye!');
  db.close();
});
