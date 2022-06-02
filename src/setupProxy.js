const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/idrugs-app/**', { target: 'https://idrugs-app.herokuapp.com' }));
    app.use(createProxyMiddleware('/idrugs-app/**', { target: 'http://idrugs-app.herokuapp.com' }));
};