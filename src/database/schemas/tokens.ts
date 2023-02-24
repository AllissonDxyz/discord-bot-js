import { Schema, model } from "mongoose";

let TokensSchema = new Schema({
  tokens: {type: Array, default: []},
});

const Tokens = model("Tokens", TokensSchema);
export default Tokens;