import { useEffect } from 'react';

function DisableZoom({ children }) {
  useEffect(() => {
    const disableZoom = (e) => {
      if (
        e.touches?.length > 1 || // pinch zoom
        e.ctrlKey // Ctrl+scroll
      ) {
        e.preventDefault();
      }
    };

    const disableWheelZoom = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', disableZoom, { passive: false });
    document.addEventListener('wheel', disableWheelZoom, { passive: false });

    return () => {
      document.removeEventListener('touchstart', disableZoom);
      document.removeEventListener('wheel', disableWheelZoom);
    };
  }, []);

  return children;
}

export default DisableZoom;