import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciesPlanetsService {
  async find(query={}) {
    let speciesPlanet = (await dbContext.SpeciesPlanets.find(query).populate("planetName species"));
    return speciesPlanet;
  }
  async findById(id) {
    let speciesPlanet = await dbContext.SpeciesPlanets.findById(id);
    if (!speciesPlanet) {
      throw new BadRequest("Invalid Id");
    }
    return speciesPlanet;
  }

  async create(body) {
      return await dbContext.SpeciesPlanets.create(body)
  }

  async delete(id) {
      return await dbContext.SpeciesPlanets.findByIdAndDelete(id)
  }
}

export const speciesPlanetsService = new SpeciesPlanetsService();