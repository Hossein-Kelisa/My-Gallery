import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact</h1>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
