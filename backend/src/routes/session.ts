import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.post('/start', (req: Request, res: Response) => {
  const sessionId = uuidv4();
  // In a real application, you would store this session in a database
  // and associate it with a user.
  console.log(`New session started: ${sessionId}`);
  res.status(200).json({ sessionId });
});

export default router;
