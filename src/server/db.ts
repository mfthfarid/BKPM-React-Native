import { open } from 'react-native-quick-sqlite';

const databaseName = 'MyAppData.db';
let db: any = null;

export const openDatabase = async () => {
  if (db) return db;
  db = open({ name: databaseName });
  console.log('Database opened');
  return db;
};

export const createTables = async () => {
  const database = await openDatabase();
  await database.execute(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE);',
  );
  console.log('Tables created or already exist');
};
