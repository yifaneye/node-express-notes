import {createProject, deleteProject, listProject, retrieveProject, updateProject} from "../controllers/controller";

const routes = app => {
	app.route('/project')
		.get((req, res, next) => {
			next();
		}, listProject)
		.post(createProject);
	app.route('/project/:projectID')
		.get(retrieveProject)
		.put(updateProject)
		.delete(deleteProject);
};

export default routes;
