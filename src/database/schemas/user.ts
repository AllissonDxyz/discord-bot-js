import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
	id: {type: String},
});

export default model("User", UserSchema);