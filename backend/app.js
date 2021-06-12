const app = require('fastify')({
  logger: true,
});

require('dotenv').config();

app.register(require('./src/routes/routes.hash'));

port = process.env.PORT;

app.listen(port, (err, addr) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  app.log.info(`Server is up on ${port}`);
});
