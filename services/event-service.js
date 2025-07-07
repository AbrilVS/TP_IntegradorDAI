import ProvinceRepository from '../repositories/event-repository.js';

export default class EventService {
  // Clase con lógica de negocio.
  getAllAsync = async () => {
    const repo = new EventRepository();
    const returnArray = await repo.getAllAsync();
    return returnArray;
  }
  
  getByIdAsync = async (id) =>     {/* hacerlo */}
  createAsync  = async (entity) => {/* hacerlo */}
  updateAsync  = async (entity) => {/* hacerlo */}
  deleteByIdAsync = async (id) =>  {/* hacerlo */}
}
