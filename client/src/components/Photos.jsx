import "./Photos.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";

function Photos() {
  return (
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
  );
}

export default Photos;
