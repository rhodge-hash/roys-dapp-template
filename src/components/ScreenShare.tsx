import React, { useRef, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', { path: '/screen-share' });

const ScreenShare: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSharing, setIsSharing] = useState(false);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to screen share socket');
    });

    socket.on('screen-frame-ack', (message: string) => {
      console.log(message);
    });

    // TODO: Further integrate with backend APIs for session management (e.g., sending session ID with frames)
    // TODO: Handle different types of screen share events (e.g., pause, resume, quality changes)

    return () => {
      socket.disconnect();
    };
  }, []);

  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsSharing(true);

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          // Performance Optimization: Consider optimizing image compression/resolution here
          socket.emit('screen-frame', event.data); // Send Blob directly, backend can handle
        }
      };
      mediaRecorder.start(1000); // Send data every 1 second

      stream.getVideoTracks()[0].onended = () => {
        stopScreenShare();
      };

    } catch (error) {
      console.error('Error starting screen share:', error);
      setIsSharing(false);
    }
  };

  const stopScreenShare = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsSharing(false);
    console.log('Screen share stopped');
  };

  return (
    <div>
      <h2>Screen Share</h2>
      <video ref={videoRef} autoPlay muted style={{ width: '100%', border: '1px solid black' }}></video>
      <button onClick={isSharing ? stopScreenShare : startScreenShare}>
        {isSharing ? 'Stop Sharing' : 'Start Sharing'}
      </button>
    </div>
  );
};

export default ScreenShare;
