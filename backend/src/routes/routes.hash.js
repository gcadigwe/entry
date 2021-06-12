const {
  getSpecificUserHashes,
  createNewHashDetails,
} = require('../controllers/controller.hash');

async function routes(app, opts) {
  app.route({
    method: 'GET',
    url: '/hash/:userId',
    handler: getSpecificUserHashes,
  });

  app.route({
    method: 'POST',
    url: '/hash/create',
    handler: createNewHashDetails,
  });
}

module.exports = routes;
