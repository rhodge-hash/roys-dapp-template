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
          const reader = new FileReader();
          reader.onload = () => {
            socket.emit('screen-frame', reader.result); // Send base64 encoded frame
          };
          reader.readAsDataURL(event.data);
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