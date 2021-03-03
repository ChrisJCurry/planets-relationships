import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;

const Species = new Schema(
  {
    name: {type: String, required: true},
    hostPlanet: {type: ObjectId, ref: "Planet", required: true},
    speciesAge: {type: Number, required: true},
    personality: {type: String, required: true},
    needsWater: {type: Boolean, required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Species;
