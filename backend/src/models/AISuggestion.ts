export interface AISuggestion {
  id: string;
  sessionId: string;
  timestamp: Date;
  type: 'code_completion' | 'refactoring' | 'bug_fix' | 'general_advice';
  content: string;
  context?: any; // Optional context like file path, line numbers
  status: 'pending' | 'accepted' | 'rejected' | 'modified';
}