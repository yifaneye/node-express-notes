import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const ProjectSchema = new Schema({
	name: {
		type: String,
		required: 'Enter project name'
	},
	description: {
		type: String,
		required: 'Enter project description'
	},
	link: String,
	created_date: {
		type: Date,
		default: Date.now()
	}
});
