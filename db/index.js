import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
})

export const query = (text, params, callback) => {
    return pool.query(text, params, callback)
}