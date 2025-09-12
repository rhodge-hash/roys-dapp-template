export interface DeveloperSession {
  id: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  isActive: boolean;
  screenShareActive: boolean;
}