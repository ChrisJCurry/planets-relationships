import ValueSchema from "../models/Value";
import GalaxySchema from '../models/Galaxy';
import StarSchema from '../models/Star';
import PlanetSchema from '../models/Planet';
import MoonSchema from '../models/Moon';
import SpeciesSchema from '../models/Species'
import SpeciesPlanetSchema from '../models/SpeciesPlanet';
import mongoose, { mongo } from "mongoose";


class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Galaxies = mongoose.model("Galaxy", GalaxySchema);
  Stars = mongoose.model("Star", StarSchema);

  Planets = mongoose.model("Planet", PlanetSchema)

  Moons = mongoose.model("Moon", MoonSchema)

  Species = mongoose.model("Species", SpeciesSchema)

  SpeciesPlanets = mongoose.model("SpeciesPlanet", SpeciesPlanetSchema)
}

export const dbContext = new DbContext();
