import { Schema, model } from 'mongoose';

const clientSchema = new Schema({
  idB: {type: String},
  name: {type: String},
  prefixo: {type: String, default: "!"},
  color: {type: String, default: "#000000"},
  typeConfig: {type: String, default: "reações"},
  deleteMsg: {type: Boolean, default: false},
  status: {type: Array, default: []},
  blacklist: {type: Array, default: []},
  globalban: {type: Array, default: []},
  manutenção: {
    status: {type: Boolean, default: false},
    motivo: {type: String, defaut: "null"},
  },
}, { bufferCommands: false });

export default model("Client", clientSchema);