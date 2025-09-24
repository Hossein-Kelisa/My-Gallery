import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="sidebar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#photos">Photos</a>
          </li>
          <li>
            <a href="#videos">Videos</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main className="content">
        <section id="home" className="hero-section">
          <h1>Capture Every Moment, Relive Every Memory</h1>
          <p>We are a passionate team of photographers and videographers dedicated to capturing the beauty of your most memorable moments. From weddings and birthday parties to celebrations and special events, we create stunning photos and cinematic videos that let you relive your happiest memories. Our professional editing ensures every image and video reflects the emotion and joy of your special day.</p>
          <a href="#contact" className="contact-button">Book your session</a>
        </section>
        <section id="photos" className="photos-section">
          <h1>Photo Album</h1>
          <div className="photo-grid">
            <img src={img1} alt="Sample 1" />
            <img src={img2} alt="Sample 2" />
            <img src={img3} alt="Sample 3" />
            <img src={img4} alt="Sample 4" />
            <img src={img5} alt="Sample 5" />
            <img src={img6} alt="Sample 6" />
            <img src={img7} alt="Sample 7" />
            <img src={img8} alt="Sample 8" />
          </div>
        </section>
        <section id="videos" className="videos-section">
          <h1>Video Gallery</h1>
          <div className="video-grid">
            <video controls >
              <source
                src="/videos/vid1.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video controls>
              <source
                src="/videos/vid2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <h1>Contact</h1>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
