import express from "express";
import BaseController from "../utils/BaseController";
import { starsService } from "../services/StarsService";
import {planetsService} from "../services/PlanetsService"

export class StarsController extends BaseController {
  constructor() {
    super("api/star");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getStarById)
      .get("/:id/planets", this.getPlanetsByStarId)
      .post("", this.create)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
        res.send(await starsService.find(req.query))
    } catch (error) {
      next(error);
    }
  }

  async getStarById(req, res, next) {
    try {
      res.send(await starsService.findById(req.params.id))
    }catch(err) {
      console.error(err)
    }
  }

  async getPlanetsByStarId(req, res, next) {
    try {
      res.send(await planetsService.find({hostStar: req.params.id}))
    }catch(err) {
      console.error(err)
    }
  }
  async create(req, res, next) {
    try {
      res.send(await starsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await starsService.delete(req.params.id))
    }catch(err) {
      next(err)
    }
  }
}
