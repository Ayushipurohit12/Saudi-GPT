import React, { useState, useEffect } from 'react';

const ScrollAndPlayVideo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const videoElement = document.getElementById('video');

      // Adjust the threshold value as needed
      if (scrollPosition > 300 && videoElement) {
        setIsVideoPlaying(true);
        // Optionally, you can also pause the video when scrolling back up
      } else {
        setIsVideoPlaying(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVideoPlaying ? (
        <video id="video" autoPlay controls>
          <source src="/Assets/WhatsApp Video 2024-03-18 at 2.37.22 PM.mp4" type="video" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Scroll down to play the video</p>
      )}
    </div>
  );
};

export default ScrollAndPlayVideo;