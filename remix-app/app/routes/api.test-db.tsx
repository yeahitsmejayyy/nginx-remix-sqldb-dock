import { json } from '@remix-run/node';
import Database from 'better-sqlite3';

export async function loader() {
  try {
    // Connect to the SQLite database
    const db = new Database('/app/data/app.db');

    // Enable Write-Ahead Logging (WAL) for better concurrency
    db.pragma('journal_mode = WAL');

    // Query the users table
    const users = db.prepare('SELECT * FROM users').all();

    // Close the database connection
    db.close();

    // Return the result as JSON
    return json({ message: 'Database connected successfully', users }, { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Database error:', error);
    return json({ error: 'Failed to connect to the database', details: errorMessage }, { status: 500 });
  }
}