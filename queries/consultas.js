import pool from "../config/db.js";

const getDate = async () => {
  const result = await pool.query("SELECT NOW()");
  console.log(result.rows[0].now);
  return result.rows[0].now;
};

const addProject = async (name, priority, description) => {
  try {
    const consulta =
      "insert into proyectos (name, priority, description) values ($1,$2, $3) returning *";
    const values = [name, priority, description];
    const result = await pool.query(consulta, values);
    console.log('proyecto agregado')
    console.log(result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.log(error.message);
  }
};

const getProjects = async () => {
  try {
    const consultas = "select * from proyectos"
    const { rows} = await pool.query(consultas)
    console.log(rows)
    return rows
  } catch (error) {
    console.log(error.message)
  }
}


const updateProject = async (name, priority, description, id) => {
  try {
    const consulta = "Update proyectos SET name = $1, priority = $2, description = $3 where id = $4 returning *"
    const values = [name, priority, description, id];
    const result = await pool.query(consulta, values)
    console.log(result.rows)
return result.rows
  } catch (error) {
     console.log(error.message);
  }

}

const deleteProject = async (id) => {
  try {
    const consulta = "delete from proyectos where id = $1 returning *"
    const values = [id]
    const { rows } = await pool.query(consulta, values)
    return rows
  } catch (error) {
    console.log(error.message);
  }
}


export { getDate, addProject, getProjects, updateProject, deleteProject };
