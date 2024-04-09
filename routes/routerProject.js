import express from "express";
import { getDate } from "../controller/projectController.js";
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

router.put('/user/:id', (req, res) => {
    res.send('Traer desde Put')
})
router.delete('/user/:id', (req, res) => {
   res.send('Traer desde Delete')
})


router.get('*', (req, res) => {
    res.send('<h1>Error 404 - Page not found</h1>')
})


export default router