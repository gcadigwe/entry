import hashController from '../controllers/controller.hash';

async function routes(app: any, opts: any) {
  app.route({
    method: 'GET',
    url: '/hash/:userId',
    handler: hashController.getHashBasedOnUser,
  });

  app.route({
    method: 'POST',
    url: '/hash/create',
    handler: hashController.addHash,
  });
}

export default routes;
