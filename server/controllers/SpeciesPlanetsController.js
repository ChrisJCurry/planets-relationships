import express from "express";
import BaseController from "../utils/BaseController";
import { speciesPlanetsService } from "../services/SpeciesPlanetsService";

export class SpeciesPlanetsController extends BaseController {
  constructor() {
    super("api/speciesplanets");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getSpeciesById)
      .post("", this.create)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
        return res.send(await speciesPlanetsService.find(req.query))
    } catch (error) {
      next(error);
    }
  }

  async getSpeciesById(id) {
    try {
      return await speciesPlanetsService.findById(id)
    }catch(err) {
      console.error(err)
    }
  }
  async create(req, res, next) {
    try {
      res.send(await speciesPlanetsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
        res.send(await speciesPlanetsService.delete(req.params.id))
    }catch(err) {
      next(err)
    }
  }
}
