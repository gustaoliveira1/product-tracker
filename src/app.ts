import fastify from 'fastify';
import { z } from 'zod';

import { ProductWebScrapping } from './services/ProductWebScrapping';

const PORT = 8080;

const app = fastify();

app.get('/products', async (request) => {
    const querySchema = z.object({
        name: z.string(),
    });

    const { name } = querySchema.parse(request.query);

    const productScrapper = new ProductWebScrapping();
    const products = productScrapper.call(name);

    return products;
});

app.listen({ port: PORT }).then(() => {
    console.info(`server listening on http://localhost:${PORT}`);
});
