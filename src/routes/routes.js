const routes = app => {
	app.route('/item')
		.get((req, res, next) => {
			console.log(req);
			next();
		}, (req, res) => {
			res.send('GET success');
		})
		.post((req, res) => res.send('POST success'));
	app.route('/item/:itemID')
		.put((req, res) => res.send('PUT success'))
		.delete((req, res) => res.send('DELETE success'));
};

export default routes;
