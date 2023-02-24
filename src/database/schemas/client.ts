import { Schema, model } from "mongoose";

let ClientSchema = new Schema({
  idB: {type: String},
  name: {type: String},
  language: {type: String, default: "pt-BR"},
  prefix: {type: String, default: "!"},
  color: {type: String, default: "#000"},
  deletCommand: {type: Boolean, default: false},
  status: {type: Array, default: []},
  blacklist: {type: Array, default: []},
  globalban: {type: Array, default: []},
  dashboardAccess: {type: String, default: "adm"},
  maintenance: {
    activated: {type: Boolean, default: false},
    reason: {type: String, defaut: ""},
  },
});

const Client = model("Client", ClientSchema);
export default Client;