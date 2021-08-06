// import pool from '../lib/utils/pool.js';
// import setup from '../data/setup.js';
// import request from 'supertest';
import app from '../lib/app.js';
import db from '../lib/utils/db.js';

describe('demo routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  it('tests', () => {
    expect(true);
  });

});
