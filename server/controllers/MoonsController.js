import express from "express";
import BaseController from "../utils/BaseController";
import { moonsService } from "../services/MoonsService";

export class MoonsController extends BaseController {
  constructor() {
    super("api/moon");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getMoonById)
      .post("", this.create)
      .delete("/:id", this.delete);
  }

  async getMoonById(id) {
    try {
      return await moonsService.findById(id)
    }catch(err) {
      console.error(err)
    }
  }
  async getAll(req, res, next) {
    try {
        return res.send(await moonsService.find(req.query))
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await moonsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await moonsService.delete(req.params.id))
    }catch(err) {
      next(err)
    }
  }
}
