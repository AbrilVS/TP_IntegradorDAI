import DBConfig from './../configs/dbConfig.js';
import pkg from 'pg'
const { Client, Pool }  = pkg;

export default class EventRepository {
    getAllAsync = async () => {
        let returnArray = null;
        const client = new Client(DBConfig);
        try {
await client.connect();
            const sql = `SELECT * FROM events`;
            const result = await client.query(sql);
await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    getByIdAsync = async (id) => {let returnArray = null;
        const client = new Client(DBConfig);
        try {
await client.connect();
            const sql = `SELECT * FROM events where id = ${id}`;
            const result = await client.query(sql);
await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;}
    createAsync = async (entity) => {/* hacerlo */}
    updateAsync = async (entity) => {/* hacerlo */}
    deleteByIdAsync = async (id) => {/* hacerlo */}
}
