import fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();
const app = fastify({ logger: true });

app.get('/', (req, res) => {
  res.send({ message: 'hello world' });
});

const port = process.env.PORT as string;

app.listen(port, (err, addr) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  app.log.info(`Server is up on port ${port}`);
});
