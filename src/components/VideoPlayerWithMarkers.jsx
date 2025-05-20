import React, { useRef, useState } from 'react';
import '../Styles/VideoPlayerWithMarkers.css';
import videoSrc from'../Assets/videos/Exploring the Hall of Inventions_free.mp4';
import bookMarkSrc from'../Assets/images/bookmark.png';

const VideoPlayerWithMarkers = () => {
  const videoRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [labelInput, setLabelInput] = useState('');

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleMarkerClick = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      videoRef.current.play();
    }
  };

  const handleAddMarker = () => {
    if (labelInput.trim() === '') return;
    const newMarker = {
      time: Math.floor(currentTime),
      label: labelInput,
      thumbnail: bookMarkSrc
    };
    setMarkers([...markers, newMarker]);
    setLabelInput('');
  };

  const handleRemoveMarker = (index) => {
    const updated = [...markers];
    updated.splice(index, 1);
    setMarkers(updated);
  };

  return (
    <div className="video-player-container">
      <div className="video-section">
        <video
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          controls
          width="60%"
        >
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta vídeo HTML5.
        </video>

        <div className="add-marker-controls">
          <input
            type="text"
            placeholder="Descrição do marcador"
            value={labelInput}
            onChange={(e) => setLabelInput(e.target.value)}
          />
          <button onClick={handleAddMarker}>Adicionar marcador</button>
        </div>
      </div>

      <div className="bookmark-list">
        <h3>Bookmarks</h3>
        {markers.map((marker, index) => (
          <div key={index} className="bookmark-item">
            <img src={marker.thumbnail} alt={`Thumbnail ${index}`} onClick={() => handleMarkerClick(marker.time)} />
            <div onClick={() => handleMarkerClick(marker.time)}>
              <span>{new Date(marker.time * 1000).toISOString().substr(14, 5)}</span>
              <p>{marker.label}</p>
            </div>
            <button className="remove-bookmark" onClick={() => handleRemoveMarker(index)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayerWithMarkers;
