import mongoose from "mongoose";
const ObjectId = mongoose.SchemaTypes.ObjectId;
const Schema = mongoose.Schema;

const Star = new Schema(
  {
    name: {type: String, required: true},
    type: {type: String, required: true},
    mass: {type: String, required: true},
    age: {type: Number, required: true},
    galaxy: {type: ObjectId, ref: "Galaxy", required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Star;
