import express from "express";
import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";

export class PlanetsController extends BaseController {
  constructor() {
    super("api/planet");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getPlanetById)
      .post("", this.create)
      .delete("/:id", this.delete);
  }

  async getPlanetById(id) {
    try {
      return await planetsService.findById(id)
    }catch(err) {
      console.error(err)
    }
  }
  async getAll(req, res, next) {
    try {
        return res.send(await planetsService.find(req.query))
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await planetsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await planetsService.delete(req.params.id))
    }catch(err) {
      next(err)
    }
  }
}
