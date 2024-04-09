import pg from 'pg'
const { Pool } = pg
/* import 'dotenv/config' */ //Solo si tienes la version 20 de node

process.loadEnvFile() // para disponibilizar las variables de entorno

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env

const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    database: DB_DATABASE,
    allowExitOnIdle: true
}

const pool = new Pool(config)




export default pool