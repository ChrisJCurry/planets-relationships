import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService {
  async find(query={}) {
    //let moons = await dbContext.Moons.find(query).populate("hostPlanet", "name hostStar").populate("hostStar", "name");
    let moons = await dbContext.Moons.find(query).populate({
        path: 'hostPlanet',
        populate: {
            path: 'hostStar'
        }
    });
    return moons;
  }
  async findById(id) {
    let moons = await dbContext.Moons.findById(id);
    if (!moons) {
      throw new BadRequest("Invalid Id");
    }
    return moons;
  }

  async create(body) {
      return await dbContext.Moons.create(body)
  }

  async delete(id) {
      return await dbContext.Moons.findByIdAndDelete(id)
  }
}

export const moonsService = new MoonsService();