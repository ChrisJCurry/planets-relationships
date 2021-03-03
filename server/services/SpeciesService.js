import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciesService {
  async find(query={}) {
    let species = await dbContext.Species.find(query).populate("hostPlanet", "name");
    return species;
  }
  async findById(id) {
    let species = await dbContext.Species.findById(id);
    if (!species) {
      throw new BadRequest("Invalid Id");
    }
    return species;
  }

  async create(body) {
      return await dbContext.Species.create(body)
  }

  async delete(id) {
      return await dbContext.Species.findByIdAndDelete(id)
  }
}

export const speciesService = new SpeciesService();