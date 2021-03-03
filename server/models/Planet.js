import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;

const Planet = new Schema(
  {
    name: {type: String, required: true},
    type: {type: String, required: true},
    habitable: {type: Boolean, required: true},
    hostStar: {type: ObjectId, ref: "Star", required: true},
    hostGalaxy: {type: ObjectId, ref: "Galaxy", required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;
