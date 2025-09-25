import "./Videos.css";

function Videos() {
  return (
    <section id="videos" className="videos-section">
      <h1>Video Gallery</h1>
      <div className="video-grid">
        <video controls>
          <source src="/videos/vid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src="/videos/vid2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Videos;
