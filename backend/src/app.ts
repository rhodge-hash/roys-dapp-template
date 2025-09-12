import express from 'express';
import sessionRoutes from './routes/session';
import feedbackRoutes from './routes/feedback'; // Import feedbackRoutes

const app = express();
app.use(express.json());

app.use('/api/session', sessionRoutes);
app.use('/api/suggestion', feedbackRoutes); // Use feedbackRoutes

export default app;