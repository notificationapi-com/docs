import React, { useState } from 'react';

export default function YouTubePlayer({ videoId, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div
      onClick={handlePlay}
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', // 9/16 = 0.5625
        background: '#000',
        cursor: 'pointer'
      }}
    >
      {!isPlaying && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '6rem',
              lineHeight: '1',
              fontWeight: 'bold',
              color: '#fff',
              textShadow:
                '0 0 100px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)',
              textAlign: 'center',
              padding: '1rem',
              letterSpacing: '0.1em'
            }}
          >
            {title}
          </div>
          <div
            style={{
              width: '72px',
              height: '72px',
              background:
                'linear-gradient(0deg, rgba(255, 0, 0, 0.7) 0%, rgba(204, 0, 0, 0.7) 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              boxShadow:
                '0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
              zIndex: 2,
              backdropFilter: 'blur(2px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow =
                '0 4px 8px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow =
                '0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2)';
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '14px 0 14px 24px',
                borderColor: 'transparent transparent transparent #ffffff',
                marginLeft: '4px',
                filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))'
              }}
            />
          </div>
        </div>
      )}
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: isPlaying ? 'block' : 'none'
        }}
        src={isPlaying ? `${videoUrl}?autoplay=1` : videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
