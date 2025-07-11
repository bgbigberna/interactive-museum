import React, { useRef, useState , useEffect} from 'react';
import '../Styles/VideoPlayerWithMarkers.css';
import videoSrc from '../Assets/videos/Who Invented The Light Bulb.mp4'


const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const VideoPlayerWithMarkersEletricPen = () => {
  const videoRef = useRef(null);
  const [markers, setMarkers] = useState(() => {
    const saved = localStorage.getItem('videoBookmarksEletricPen');
    return saved ? JSON.parse(saved) : [];
  });
  const [labelInput, setLabelInput] = useState('');
  const [glow, setGlow] = useState(false);
  const [glowTime, setGlowTime] = useState(null);
  const lastGlowTime = useRef(null);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0); // auto-select Chapter 1

  const chapters = [
    { label: 'Chapter 1', time: 0, description: 'What life was like before the creation and normalization of the light bulb' },
    { label: 'Chapter 2', time: 76, description: 'The story of Humphry Davy, the first person to create artificial electric light.' },
    { label: 'Chapter 3', time: 247, description: 'The history and contribuitions of Thomas Edison in the process of the creation of the incandescent light bulb.' },
    { label: 'Chapter 4', time: 557, description: 'The history, development and challenges of the fluorescent light' },
    { label: 'Chapter 5', time: 695, description: "The invention of LED's and colour changes brought to lighting." },
  ];

  useEffect(() => {
  const interval = setInterval(() => {
    if (!videoRef.current) return;

    const current = Math.floor(videoRef.current.currentTime);
    const hit = markers.some(marker => marker.time === current);

    if (hit && lastGlowTime.current !== current) {
      setGlow(true);
      setGlowTime(current); // set the glowing time for the bookmark
      lastGlowTime.current = current;
      setTimeout(() => {
        setGlow(false);
        setGlowTime(null); // remove the glowing time after 1s
      }, 1000); // glow lasts 1s
    }
  }, 500); // check every 0.5 sec

    return () => clearInterval(interval);
  }, [markers]);

  const addBookmark = () => {
    const video = videoRef.current;
    if (!video || labelInput.trim() === '') return;

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth / 4;
    canvas.height = video.videoHeight / 4;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const thumbnail = canvas.toDataURL();

    const newMarker = {
      time: Math.floor(video.currentTime),
      label: labelInput,
      thumbnail,
    };

    setMarkers(prev => [...prev, newMarker]);
    setLabelInput('');
  };

  const removeBookmark = (index) => {
    setMarkers(prev => prev.filter((_, i) => i !== index));
  };

  const jumpToTime = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (markers.length === 0) {
      localStorage.removeItem('videoBookmarksEletricPen');
    } else {
      localStorage.setItem('videoBookmarksEletricPen', JSON.stringify(markers));
    }
  }, [markers]);

  useEffect(() => {
      const video = videoRef.current;
      if (!video) return;
  
      const handlePlay = () => { lastGlowTime.current = null; };
      const handleSeeked = () => { lastGlowTime.current = null; };
  
      video.addEventListener('play', handlePlay);
      video.addEventListener('seeked', handleSeeked);
  
      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('seeked', handleSeeked);
      };
    }, []);
  // Auto-jump to Chapter 1 on video load
    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;
  
      const handleLoadedMetadata = () => {
        jumpToTime(chapters[0].time); // Start at Chapter 1
      };
  
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
  
      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }, []);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const video = videoRef.current;
        if (!video) return;
  
        const currentTime = video.currentTime;
  
        // find the actual chapter based on the time of the video
        const activeIndex = chapters.reduce((acc, chapter, idx) => {
          if (currentTime >= chapter.time) return idx;
          return acc;
        }, 0);
  
        // only update if chapter is diferent
        if (currentChapterIndex !== activeIndex) {
          setCurrentChapterIndex(activeIndex);
        }
      }, 500);
  
      return () => clearInterval(interval);
    }, [chapters, currentChapterIndex]);
  
  
  
  return (
    <div className="video-container">
      <div className="video-section">
        <video ref={videoRef} controls className={glow ? 'glow' : ''}>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="chapters-section">
          <div className="chapter-buttons">
            {chapters.map((chapter, index) => (
              <button
                key={index}
                className={`chapter-button${currentChapterIndex === index ? ' active' : ''}`}
                onClick={() => {
                  jumpToTime(chapter.time);
                  setCurrentChapterIndex(index);
                }}
              >
                {chapter.label}
              </button>
            ))}
          </div>
          {currentChapterIndex !== null && (
            <div className="chapter-description">
              <p>{chapters[currentChapterIndex].description}</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="sidebar">
        <div className="marker-list">
          {markers.map((marker, index) => (
            <div key={index} className={`marker-item${glowTime === marker.time ? ' glow' : ''}`}>
              <img
                src={marker.thumbnail}
                className="thumbnail"
                onClick={() => jumpToTime(marker.time)}
                alt={`Thumbnail for ${marker.label}`}
              />
              <div className="marker-info">
                <div className="marker-label" onClick={() => jumpToTime(marker.time)}>
                  {marker.label}
                </div>
                <div className="marker-time">{formatTime(marker.time)}</div>
              </div>
              <button className="remove-btn" onClick={() => removeBookmark(index)}>✖</button>
            </div>
          ))}
        </div>
        <div className="controls">
          <input
            type="text"
            value={labelInput}
            placeholder="Enter bookmark label"
            onChange={(e) => setLabelInput(e.target.value)}
          />
          <button onClick={addBookmark}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerWithMarkersEletricPen;