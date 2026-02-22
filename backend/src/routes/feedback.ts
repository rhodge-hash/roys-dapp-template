import { Router, Request, Response } from 'express';
import { UserFeedback } from '../models/UserFeedback';

const router = Router();

router.post('/:suggestionId/feedback', (req: Request, res: Response) => {
  const { suggestionId } = req.params;
  const { userId, type, comment } = req.body;

  const feedback: UserFeedback = {
    id: 'feedback-' + Date.now(),
    suggestionId,
    userId,
    timestamp: new Date(),
    type,
    comment,
  };

  // In a real application, you would store this feedback in a database.
  console.log(`Received feedback for suggestion ${suggestionId}:`, feedback);
  res.status(200).json({ message: 'Feedback received', feedbackId: feedback.id });
});

export default router;
