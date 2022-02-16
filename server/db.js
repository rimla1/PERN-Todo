const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'punim11godina',
    host: 'localhost',
    port: 5432,
    database: 'PERN-Todo'
})

module.exports = pool;