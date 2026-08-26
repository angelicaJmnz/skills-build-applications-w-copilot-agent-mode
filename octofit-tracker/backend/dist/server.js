import express from 'express';
import './config/database.js';
import apiRoutes from './routes/index.js';
const app = express();
const port = Number(process.env.PORT) || 8000;
app.use(express.json());
app.use('/api', apiRoutes);
app.get('/api/health', (_request, response) => {
    response.json({ status: 'ok' });
});
app.listen(port, () => {
    console.log(`OctoFit API listening on port ${port}`);
});
