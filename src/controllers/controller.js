import mongoose from 'mongoose';
import {ProjectSchema} from '../models/models';

const Project = mongoose.model('Project', ProjectSchema);

export const createProject = (req, res) => {
	let newProject = new Project(req.body);
	newProject.save((err, project) => {
		if (err) res.send(err);
		res.json(project);
	})
};

export const listProject = (req, res) => {
	Project.find({}, (err, project) => {
		if (err) res.send(err);
		res.json(project);
	})
};
