import express from "express";
import BaseController from "../utils/BaseController";
import { valuesService } from "../services/ValueService";
import { galaxiesService } from "../services/GalaxiesService";
import {starsService} from "../services/StarsService"

export class GalaxiesController extends BaseController {
  constructor() {
    super("api/galaxy");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getGalaxyById)
      .get("/:id/stars", this.getStarsByGalaxyId)
      .post("", this.create)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
        res.send(await galaxiesService.find(req.query))
    } catch (error) {
      next(error);
    }
  }

  async getGalaxyById(req, res, next) {
    try {
      res.send(await galaxiesService.findById(req.params.id))
    }catch(err) {
      console.error(err)
    }
  }

  async getStarsByGalaxyId(req, res, next) {
    try {
      res.send(await starsService.find({galaxy: req.params.id}))
    }catch(err) {
      console.error(err)
    }
  }
  async create(req, res, next) {
    try {
      res.send(await galaxiesService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await galaxiesService.delete(req.params.id))
    }catch(err) {
      console.error(err)
    }
  }
}
