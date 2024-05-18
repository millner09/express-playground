import * as db from '../db/index.js'


const getAllUsers = async () => {
    const { rows } = await db.query('SELECT * FROM etest.users');
    return rows;
};

const getUserById = async (userId) => {
    const { rows } = await db.query('SELECT * FROM etest.users WHERE id = $1', [userId])
    return rows[0];
}

const createUser = async (user) => {
    const text = 'INSERT INTO etest.users(name, email) VALUES($1, $2) RETURNING *'
    const values = [user.name, user.email]

    const queryResult = await db.query(text, values)
    return queryResult.rows[0]
}

const deleteUser = async (userId) => {
    await db.query("DELETE FROM etest.users WHERE id = $1", [userId]);
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
}