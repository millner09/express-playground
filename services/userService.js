import { query } from '../db/index.js'

export const getAllUsers = async () => {
    const { rows } = await query('SELECT * FROM etest.users');
    return rows;
};

export const getUserById = async (userId) => {
    const { rows } = await query('SELECT * FROM etest.users WHERE id = $1', [userId])
    return rows[0];
}

export const createUser = async (user) => {
    const text = 'INSERT INTO etest.users(name, email) VALUES($1, $2) RETURNING *'
    const values = [user.name, user.email]

    const queryResult = await query(text, values)
    return queryResult.rows[0]
}

export const deleteUser = async (userId) => {
    await db.query("DELETE FROM etest.users WHERE id = $1", [userId]);
}