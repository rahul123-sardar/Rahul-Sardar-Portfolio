export default function Contact() {
  return (
    <div className="container mt-5">
       <br /><br /><br />
      <h2 className="mb-4">Contact Me</h2>

      <p>
        I’m always open to discussing new opportunities, projects, or
        collaborations. Feel free to reach out to me.
      </p>

      <ul className="list-unstyled">
        <li><strong>Email:</strong> rahul@example.com</li>
        <li><strong>Phone:</strong> +91 XXXXX XXXXX</li>
        <li><strong>Location:</strong> India</li>
      </ul>

      <div className="mt-3">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark me-2"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
