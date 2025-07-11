import { Router } from 'express';
import EventService from '../services/event-service.js'; 
const router = Router();
const svc = new EventService(); 

// GET /events
router.get('', async (req, res) => {
  let respuesta;
  const returnArray = await svc.getAllAsync();
  if (returnArray != null) {
    respuesta = res.status(200).json(returnArray);
  } else {
    respuesta = res.status(500).send(`Error interno.`);
  }
  return respuesta;
});

// GET /events/:id
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const result = await svc.getByIdAsync(id);
  if (result != null && result.length > 0) {
    res.status(200).json(result);
  } else {
    res.status(404).send(`Evento con id ${id} no encontrado.`);
  }
});

// POST /events
router.post('', async (req, res) => {
  const entity = req.body;
  const result = await svc.createAsync(entity);
  if (result != null) {
    res.status(201).json(result);
  } else {
    res.status(500).send(`No se pudo crear el evento.`);
  }
});

// PUT /events
router.put('', async (req, res) => {
  const entity = req.body;
  const result = await svc.updateAsync(entity);
  if (result != null) {
    res.status(200).json(result);
  } else {
    res.status(500).send(`No se pudo actualizar el evento.`);
  }
});

// DELETE /events/:id
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const result = await svc.deleteByIdAsync(id);
  if (result != null) {
    res.status(200).json(result);
  } else {
    res.status(404).send(`No se encontró un evento con id ${id} para eliminar.`);
  }
});

export default router;

