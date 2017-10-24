const requireAuth = require('../middlewares/requireAuth');

module.exports = app => {
  app.get('/dashboard', requireAuth, (req, res) => {
    res.json({ secret: 'Only cool people can see this!' });
  });
};
