import React, { useEffect, useRef } from "react";

interface VideoPlayerProps {
  videoId: string;
  startTime?: number;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const VideoPlayer = ({ videoId, startTime = 0 }: VideoPlayerProps) => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          start: startTime,
          autoplay: 0,
          modestbranding: 1,
          rel: 0,
        },
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId, startTime]);

  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};