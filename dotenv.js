import 'dotenv/config'
// La línea de arriba carga el archivo .env en process.env
const DBConfig = {
    host        : process.env.DB_HOST       ?? '',
    database    : process.env.DB_DATABASE   ?? '',
    user        : process.env.DB_USER       ?? '',
    password    : process.env.DB_PASSWORD   ?? '',
    port        : process.env.DB_PORT       ?? 5432
}

export default DBConfig;
