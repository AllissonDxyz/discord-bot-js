import { Schema, model } from 'mongoose';

let UserSchema = new Schema({
  idU: { type: String },
  idS: { type: String },
  money: { type: Number, default: 0 },
  bank: { type: Number, default: 0 },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  messagesCount: { type: Number, default: 0 },
  aboutme: { type: String, default: '' },
  punishmentsGif: { type: String, default: '' },
  items: { type: Array, default: [] },
  profession: { type: String, default: '' },
  crystals: { type: Number, default: 0 },
  bag: { type: Number, default: 100 },
  badges: { type: Array, default: [] },
  pets: { type: Array, default: [] },
  bonus: { type: Array, default: [] },
  punishments: { type: Array, default: [] },
  crypto: {
    wallet: { type: Array, default: [] },
  },
  lots: { type: Array, default: [] },
  prision: {
    stuck: { type: Boolean, default: false },
    date: { type: Number, default: 0 },
    attempts: { type: Boolean, default: false },
  },
  pd: {
    pd: { type: String, default: '' },
    data: { type: Number, default: 0 },
    owner: { type: String, default: '' },
  },
  investment: {
    invested: { type: Number, default: 0 },
    actions: { type: Array, default: [] },
    date: { type: Number, default: 0 },
  },
  loan: {
    limit: { type: Number, default: 5000 },
    fees: { type: Number, default: 0 },
    date: { type: Number, default: 0 },
    amount: { type: Number, default: 0 },
    payment: { type: Number, default: 0 },
    rate: { type: Number, default: 0 },
  },
  mute: {
    muted: { type: Boolean, default: false },
    time: { type: Number, default: 0 },
    date: { type: Number, default: 0 },
  },
  marry: {
    date: { type: String, default: '' },
    spouse: { type: String, default: '' },
    marryed: { type: Boolean, default: false },
  },
  vip: {
    hasVip: { type: Boolean, default: false },
    channel: { type: String, default: '' },
    role: { type: String, default: '' },
    type: { type: String, default: '' },
    date: { type: Number, default: 0 },
    time: { type: Number, default: 0 },
  },
  cooldowns: {
    daily: { type: Number, default: 0 },
    crime: { type: Number, default: 0 },
    theft: { type: Number, default: 0 },
    work: { type: Number, default: 0 },
  },
  voice: {
    joinedAt: { type: Number },
    timed: { type: Number, default: 0 },
    mute: {
      muted: { type: Boolean, default: false },
      time: { type: Number, default: 0 },
      date: { type: Number, default: 0 },
    },
  },
  staff: {
    registers: { type: Number, default: 0 },
    recruitments: { type: Number, default: 0 },
    rpp: {
      start: { type: Number, default: 0 },
      end: { type: String, default: 0 },
      reason: { type: String, default: '' },
    },
  },
});

const User = model('Users', UserSchema);
export default User;
