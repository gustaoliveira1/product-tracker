import fastify from 'fastify';
import { z } from 'zod';

import { ProductWebScrapping } from './services/ProductWebScrapping';

const PORT = 8080;

const app = fastify();

app.get('/products', async (request, reply) => {
  try {
      const querySchema = z.object({
          name: z.string(),
      });

      const { name } = querySchema.parse(request.query);

      const productScrapper = new ProductWebScrapping();
      const products = productScrapper.call(name);

      return products;
  } catch (error) {
      reply.status(400).send({ error: 'Product name was not given' })
  }
});

app.listen({ port: PORT }).then(() => {
    console.info(`server listening on http://localhost:${PORT}`);
});
