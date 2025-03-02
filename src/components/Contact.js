import React from 'react';

const Home = () => {
  return <div><section class="contact-section">
  <h1>Contact Us</h1>
  <p>
    We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
  </p>

  <div class="contact-info">
    <h2>Our Contact Information</h2>
    <ul>
      <li><strong>Email:</strong> <a href="mailto:sumayyaali.work@gmail.com">sumayyaali.work@gmail.com</a></li>
      <li><strong>Phone:</strong> +1 (123) 456-7890</li>
      <li><strong>Address:</strong> Linden Avenue, Maynooth, Ireland</li>
    </ul>
  </div>

  <div class="contact-form">
    <h2>Send Us a Message</h2>
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" placeholder="Your message..." required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
</section></div>
};

export default Home;