import { Schema, model } from "mongoose";

let GuildSchema = new Schema({
  idS: {type: String},
  name: {type: String},
  botId: {type: String},
  vip: {type: Array, default: []},
  roles: {
    muteChat: {type: String, default: ""},
    muteCall: {type: String, default: ""},
  },
  activeMember: {
    role: {type: String, default: ""},
    minMessages: {type: Number, default: 0},
    activated: {type: Boolean, default: false},
  },
  rpp: {
    role: {type: String, default: ""},
    channelLogs: {type: String, default: ""},
    daysLimit: {type: Number, default: 0},
  },
  pd: {
    role: {type: String, default: ""},
    limit: {type: Number, default: 1},
    perm: {type: Array, default: []},
  },
  levels: {
    activated: {type: Boolean, default: true},
    blockedChannels: {type: Array, default: []},
    xp: {type: Number, default: 0},
  },
  messageCounter: {
    blockedChannels: {type: Array, default: []},
    filter: {type: Array, default: []},
    activated: {type: Boolean, default: false},
    autoReset: {type: Number, default: 0},
    date: {type: Number, default: 0},
  },
  memberCounter: {
    channel: {type: String, default: ""},
    emoji: {type: String, default: ""},
    message: {type: String, default: ""},
    custom: {type: Array, default: []},
    activated: {type: Boolean, default: false},
  },
  exit: {
    message: {type: String, default: ""},
    channel: {type: String, default: ""},
    activated: {type: Boolean, default: false},
    embed: {type: Boolean, default: false},
  },
  boostAlert: {
    activationMessage: {type: String, default: ""},
    removalMessage: {type: String, default: ""},
    channel: {type: String, default: ""},
    activated: {type: Boolean, default: false},
  },
  commandBlock: {
    activated: { type: Boolean, default: false},
    channels: { type: Array, default: []},
    commands: {type: Array, default: []},
    message: {type: String, default: "Está Proibido usar comandos aqui!"},
  },
  defenses: {
    links: {type: Boolean, default: false},
    bots: {type: Boolean, dafault: false},
    flood: {type: Boolean, default: false},
    fakes: {type: String, default: "0"},
    join: {type: Number, default: 0},
  },
  staff: {
    role: {type: String, default: ""},
    recruiter: {type: String, default: ""},
    recruitmentLogs: {type: String, default: ""},
    areas: {type: Array, default: []},
  },
  welcome: {
    message: {type: String, default: ""},
    channel: {type: String, default: ""},
    deletTime: {type: Number, default: 0},
    activated: {type: Boolean, default: false},
    embed: {type: Boolean, default: false},
  },
  randomMention: {
    interval: {type: Number, default: 0},
    activated: {type: Boolean, default: false},
    channel: {type: String, default: ""},
    filter: {type: Array, default: []},
  },
  autoMessage: {
    interval: {type: Number, default: 0},
    activated: {type: Boolean, default: false},
    message: {type: String, default: ""},
    channel: {type: String, default: ""},
    deletTime: {type: Number, default: 0},
    embed: {type: Boolean, default: false},
  },
  register: {
    noobRole: {type: String, default: ""},
    registrar: {type: String, default: ""},
    registered: {type: String, default: ""},
    pages: {type: Array, default: []},
  },
  call: {
    blockedChannels: {type: Array, default: []},
    blockedCategorys: {type: Array, default: []},
    trackAllMembers: {type: Boolean, default: true},
    trackRole: {type: String, default: ""},
    trackMute: {type: Boolean, default: true},
    trackDeaf: {type: Boolean, default: true},
    activated: {type: Boolean, default: true},
  },
  channels: {
    messageCreate: {type: String, default: ""},
    roles: {type: String, default: ""},
    channels: {type: String, default: ""},
    punishments: {type: String, default: ""},
    sweepstakes: {type: String, default: ""},
    general: {type: String, default: ""},
    call: {type: String, default: ""},
    antiraid: {type: String, default: ""},
    level: {type: String, default: ""},
    suggests: {type: String, default: ""},
    register: {type: String, default: ""},
    support: {type: String, default: ""},
  },
  antiraid: {
    ban: {
      activated: {type: Boolean, default: false},
      limit: {type: Number, default: 0},
    },
    kick: {
      activated: {type: Boolean, default: false},
      limit: {type: Number, default: 0},
    },
    removeChat: {
      activated: {type: Boolean, default: false},
      limit: {type: Number, default: 0},
    },
    removeRole: {
      activated: {type: Boolean, default: false},
      limit: {type: Number, default: 0},
    },
  },
});

const Guild = model("Guilds", GuildSchema);
export default Guild;