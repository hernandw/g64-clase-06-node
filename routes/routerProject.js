import express from "express";
import { getDate, addProject, getProjects, updateProject, deleteProject } from "../queries/consultas.js";
const router = express.Router();




router.get('/', (req, res) => {
    res.send('hola mundo')
})

router.get('/user', (req, res) => {
    res.send('Traer desde Get')
})


router.get('/date', async(req, res) => {
    const fecha = await getDate()
    res.json(fecha)
})

router.post('/login', (req, res) => {
    
    res.send('Traer desde Post')
})


router.get('/projects', async (req, res) => {
    const result = await getProjects()
    res.json(result)
})

router.post('/project', async(req, res) => {
    const {name, priority, description} = req.body
    const consulta  = await addProject(name, priority, description)
   res.send(consulta);
})

router.put('/project/:id', async(req, res) => {
    const id = req.params.id
    const { name, priority, description } = req.body
    const result = await updateProject(name, priority, description, id)
    res.send('Datos actualizados correctamnte')
    
    
})
router.delete('/project/:id', async(req, res) => {
    const { id } = req.params
    const result = await deleteProject(id)
    

   res.send('Traer desde Delete')
})


router.get("*", (req, res) => {
  res.send("<h1>Error 404 - Page not found</h1>");
});


export default router