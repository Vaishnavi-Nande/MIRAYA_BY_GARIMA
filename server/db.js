const { Pool } = require('pg');
require('dotenv').config();

const hasDbUrl = !!process.env.DATABASE_URL;

const pool = hasDbUrl
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    })
  : null;

// Run a query to initialize database tables
const initializeDb = async () => {
  if (!pool) {
    console.warn('DATABASE_URL environment variable is missing. Running in mock fallback database mode.');
    return;
  }
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        message TEXT,
        type VARCHAR(50) NOT NULL,
        details JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('PostgreSQL database initialized successfully (inquiries table ready).');
  } catch (err) {
    console.error('Error initializing PostgreSQL database:', err);
  }
};

initializeDb();

module.exports = {
  pool,
  query: async (text, params) => {
    if (!pool) {
      console.warn(`[Mock Database] Executing query: ${text} | Params: ${JSON.stringify(params)}`);
      return { rows: [{ id: 'mock-' + Math.floor(Math.random() * 1000), created_at: new Date() }] };
    }
    return pool.query(text, params);
  }
};
