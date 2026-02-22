export interface ScreenFrame {
  sessionId: string;
  timestamp: Date;
  imageData: string; // Base64 encoded image data
  metadata?: any; // Optional metadata like active window, cursor position
}