import {createProject, listProject} from "../controllers/controller";

const routes = app => {
	app.route('/project')
		.get((req, res, next) => {
			next();
		}, listProject)
		.post(createProject);
	app.route('/project/:itemID')
		.put((req, res) => res.send('PUT success'))
		.delete((req, res) => res.send('DELETE success'));
};

export default routes;
