import { Router } from 'express';
function handleError(response, error) {
    const message = error instanceof Error ? error.message : 'Unexpected server error';
    response.status(500).json({ error: message });
}
export function createResourceRouter(model) {
    const router = Router();
    router.get('/', async (_request, response) => {
        try {
            response.json(await model.find().lean());
        }
        catch (error) {
            handleError(response, error);
        }
    });
    router.get('/:id', async (request, response) => {
        try {
            const resource = await model.findById(request.params.id).lean();
            if (!resource) {
                response.status(404).json({ error: 'Resource not found' });
                return;
            }
            response.json(resource);
        }
        catch (error) {
            handleError(response, error);
        }
    });
    router.post('/', async (request, response) => {
        try {
            const resource = await model.create(request.body);
            response.status(201).json(resource);
        }
        catch (error) {
            handleError(response, error);
        }
    });
    router.put('/:id', async (request, response) => {
        try {
            const resource = await model
                .findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true })
                .lean();
            if (!resource) {
                response.status(404).json({ error: 'Resource not found' });
                return;
            }
            response.json(resource);
        }
        catch (error) {
            handleError(response, error);
        }
    });
    router.delete('/:id', async (request, response) => {
        try {
            const resource = await model.findByIdAndDelete(request.params.id).lean();
            if (!resource) {
                response.status(404).json({ error: 'Resource not found' });
                return;
            }
            response.status(204).send();
        }
        catch (error) {
            handleError(response, error);
        }
    });
    return router;
}
