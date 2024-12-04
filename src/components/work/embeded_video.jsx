import './embeded_style.css';

const renderVideo = (vid_url) => {
  if (!vid_url || vid_url.length === 0) return null;

  console.log("Rendering Videos:", vid_url);

  return vid_url.map((url, index) => {
    let embedUrl = '';

    if (url.includes('vimeo.com')) {
      const vimeoId = url.split('/').pop();
      embedUrl = `https://player.vimeo.com/video/${vimeoId}`;
    }
    else if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const youtubeId = url.includes('youtube.com')
        ? new URLSearchParams(new URL(url).search).get('v')
        : url.split('/').pop();
      embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
    }

    console.log(`Video ${index + 1} embed URL:`, embedUrl);

    if (!embedUrl) {
      console.error('Invalid video URL:', url);
      return null;
    }
    return (
    <div key={index} className="video-container" >
      <div className="video-wrapper" >
      <iframe
        src={embedUrl}
        frameBorder="0"
        className="video-iframe"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
        allowFullScreen
        title={`Video ${index + 1}`}
        ></iframe>
      </div>
    </div>
    );
  });
};

export default renderVideo;
