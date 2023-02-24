import { Schema, model } from "mongoose";

let CommandSchema = new Schema({
  name: {type: String},
  usages: {type: Number, default: 0},
  guildBlock: {type: Array, default: []},
  activated: {type: Boolean, default: true},
  maintenance: {type: Boolean, default: false},
});

const Command = model("Commands", CommandSchema);
export default Command;