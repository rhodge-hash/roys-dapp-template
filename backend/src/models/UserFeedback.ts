export interface UserFeedback {
  id: string;
  suggestionId: string;
  userId: string;
  timestamp: Date;
  type: 'accepted' | 'rejected' | 'modified';
  comment?: string;
}