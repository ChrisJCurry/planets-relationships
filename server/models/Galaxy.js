import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;

const Galaxy = new Schema(
  {
    name: {type: String, required: true},
    type: {type: String, required: true},
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Galaxy;
