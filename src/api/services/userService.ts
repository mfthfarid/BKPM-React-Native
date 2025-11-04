import { open } from 'react-native-quick-sqlite';
import { openDatabase } from '../../server/db'; // Jika kamu tetap simpan instance di sana

interface User {
  id?: number;
  name: string;
  email: string;
}

export const insertUser = async (user: User) => {
  const db = await openDatabase();
  await db.execute('INSERT INTO users (name, email) VALUES (?, ?)', [
    user.name,
    user.email,
  ]);
};

// export const getUsers = async (): Promise<User[]> => {
//   const db = await openDatabase();
//   const result = await db.execute('SELECT * FROM users');
//   const users: User[] = [];

//   for (let i = 0; i < result.rows.length; i++) {
//     users.push(result.rows.item(i));
//   }

//   return users;
// };

export const getUsers = async (): Promise<User[]> => {
  const db = await openDatabase();
  const result = await db.execute('SELECT * FROM users');

  return Array.from({ length: result.rows.length }, (_, i) =>
    result.rows.item(i),
  );
};
