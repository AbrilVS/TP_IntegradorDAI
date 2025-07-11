import EventRepository from '../repositories/event-repository.js';

export default class EventService {
  // Clase con lógica de negocio.
  
  getAllAsync = async () => {
    const repo = new EventRepository();
    const returnArray = await repo.getAllAsync();
    return returnArray;
  }

  getByIdAsync = async (id) => {
    const repo = new EventRepository();
    const event = await repo.getByIdAsync(id);
    return event;
  }

  createAsync = async (entity) => {
    const repo = new EventRepository();
    const newEvent = await repo.createAsync(entity);
    return newEvent;
  }

  updateAsync = async (entity) => {
    const repo = new EventRepository();
    const updatedEvent = await repo.updateAsync(entity);
    return updatedEvent;
  }

  deleteByIdAsync = async (id) => {
    const repo = new EventRepository();
    const deletedEvent = await repo.deleteByIdAsync(id);
    return deletedEvent;
  }
}

