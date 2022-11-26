const MusicianController = require('../controllers/musician.controllers'),
	{ authenticate } = require('../config/jwt.config');

module.exports = (app) => {
	app.post('/musicians/register/', MusicianController.register);
	app.post('/musicians/login', MusicianController.login);
	app.get('/musicians/logout', authenticate, MusicianController.logout);

	app.get('/musicians/all', authenticate, MusicianController.get_all);
	app.get('/musicians/:id', authenticate, MusicianController.show_one);
	app.put('/musicians/edit/:id', authenticate, MusicianController.update);
	app.put('/musicians/delete/:id', authenticate, MusicianController.destroy);
};
