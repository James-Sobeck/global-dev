const { requiresLogin, requiresAdmin } = require('./middleware/authorization')
const admin = require('./admin')
const users = require('./users')

module.exports = (app, passport, db) => {
    app.post('/login', passport.authenticate('local'), users.login)
	app.get('/logout', users.logout)
	app.get('//ping', requiresLogin, users.ping)

	app.get('/admin/login', admin.renderLogin)
	app.post('/admin/login', passport.authenticate('local', { failureRedirect: '/admin/login' }), admin.login)
	app.get('/admin/panel', requiresAdmin, admin.renderPanel)

	//app.get('/health', monitoring.health(db))

	app.use(function (err, req, res, next) {
		if (err.message && (~err.message.indexOf('not found'))) {
			return next()
		}
		return res.status(500).json({error: 'Error on backend occurred.'})
	})

	app.use(function (req, res) {
		const payload = {
			url: req.originalUrl,
			error: 'Not found'
		}
		if (req.accepts('json')) return res.status(404).json(payload)

		res.status(404).render('404', payload)
	})
}