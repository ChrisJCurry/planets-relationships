import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;

const SpeciesPlanet = new Schema(
  {
    planetName: {type: ObjectId, ref: "Planet", required: true},
    species: {type: ObjectId, ref: "Species", required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default SpeciesPlanet;
