const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/auth', { target: 'https://localhost:5000/' }));
};
