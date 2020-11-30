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

export const retrieveProject = (req, res) => {
	Project.findById(req.params.projectID, (err, project) => {
		if (err) res.send(err);
		res.json(project);
	})
};

export const updateProject = (req, res) => {
	Project.findOneAndUpdate({_id: req.params.projectID}, req.body, {
			new: true,
			useFindAndModify: false
		}, (err, project) => {
			if (err) res.send(err);
			res.json(project);
		}
	)
};

export const deleteProject = (req, res) => {
	Project.remove({_id: req.params.projectID}, (err) => {
			if (err) res.send(err);
			res.json({message: 'Deleted successfully'});
		}
	)
};
