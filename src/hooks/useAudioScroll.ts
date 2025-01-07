import { useEffect, useRef } from 'react';

export function useAudioScroll() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    // Audio source will be added later
    audioRef.current.preload = 'auto';
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.warn('Audio playback failed:', error);
      });
    }
  };

  return { playAudio };
}