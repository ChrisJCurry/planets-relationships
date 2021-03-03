import express from "express";
import BaseController from "../utils/BaseController";
import { speciesService } from "../services/SpeciesService";

export class SpeciesController extends BaseController {
  constructor() {
    super("api/species");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getSpeciesById)
      .post("", this.create)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
        return res.send(await speciesService.find(req.query))
    } catch (error) {
      next(error);
    }
  }

  async getSpeciesById(id) {
    try {
      return await speciesService.findById(id)
    }catch(err) {
      console.error(err)
    }
  }
  async create(req, res, next) {
    try {
      res.send(await speciesService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
        res.send(await speciesService.delete(req.params.id))
    }catch(err) {
      next(err)
    }
  }
}
