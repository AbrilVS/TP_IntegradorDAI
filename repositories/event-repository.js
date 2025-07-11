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

    getByIdAsync = async (id) => {
        let returnArray = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = `SELECT * FROM events WHERE id = ${id}`;
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    createAsync = async (entity) => {
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = `
                INSERT INTO events (
                    name, description, id_event_category, id_event_location,
                    start_date, duration_in_minutes, price, enabled_for_enrollment,
                    max_assistance, id_creator_user
                ) VALUES (
                    '${entity.name}', '${entity.description}', ${entity.id_event_category}, ${entity.id_event_location},
                    '${entity.start_date}', ${entity.duration_in_minutes}, ${entity.price}, ${entity.enabled_for_enrollment},
                    ${entity.max_assistance}, ${entity.id_creator_user}
                ) RETURNING *`;
            const result = await client.query(sql);
            await client.end();
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    updateAsync = async (entity) => {
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = `
                UPDATE events SET
                    name = '${entity.name}',
                    description = '${entity.description}',
                    id_event_category = ${entity.id_event_category},
                    id_event_location = ${entity.id_event_location},
                    start_date = '${entity.start_date}',
                    duration_in_minutes = ${entity.duration_in_minutes},
                    price = ${entity.price},
                    enabled_for_enrollment = ${entity.enabled_for_enrollment},
                    max_assistance = ${entity.max_assistance},
                    id_creator_user = ${entity.id_creator_user}
                WHERE id = ${entity.id}
                RETURNING *`;
            const result = await client.query(sql);
            await client.end();
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    deleteByIdAsync = async (id) => {
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = `DELETE FROM events WHERE id = ${id} RETURNING *`;
            const result = await client.query(sql);
            await client.end();
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
        return null;
    }
}
