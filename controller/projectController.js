import pool from "../config/db.js";

const getDate = async () => {
  const result = await pool.query("SELECT NOW()");
    console.log(result.rows[0].now);
    return result.rows[0].now
};


export {
  getDate
}