/**
 * Load openstreetmap schema to the database
 * Created by xiamx on 2016-08-30.
 */
import * as fs from 'mz/fs'
import * as PgPromise from 'pg-promise'
const pgp = PgPromise()

export async function loadSchema(file: string) {
    let db = pgp(process.env.DATABASE_URL)
    let query = await fs.readFile(file, {
        encoding: 'utf8'
    })
    return await db.query(query)
}

