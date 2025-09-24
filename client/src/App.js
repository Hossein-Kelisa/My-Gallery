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
        <section id="home">
          <h1>Welcome to Our Gallery</h1>
          <p>This is the home section.</p>
        </section>
        <section id="photos" className="photos-section">
          <h1>Photo Album</h1>
          <div className="photo-grid">
            <img src="https://via.placeholder.com/150" alt="Sample 1" />
            <img src="https://via.placeholder.com/150" alt="Sample 2" />
            <img src="https://via.placeholder.com/150" alt="Sample 3" />
            <img src="https://via.placeholder.com/150" alt="Sample 4" />
            <img src="https://via.placeholder.com/150" alt="Sample 5" />
            <img src="https://via.placeholder.com/150" alt="Sample 6" />
          </div>
        </section>
        <section id="videos" className="videos-section">
          <h1>Video Gallery</h1>
          <div className="video-grid">
            <video controls>
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video controls>
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
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
