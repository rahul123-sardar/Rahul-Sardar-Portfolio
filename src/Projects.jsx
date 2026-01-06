export default function Projects() {
  return (
    <div className="container mt-5">
       <br /><br /><br />
      <h2 className="mb-4">Projects</h2>

      {/* Project 1 */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Currency Converter</h5>
          <p className="card-text">
            A web application that converts currency values between different
            countries using real-time exchange rates.
          </p>
          <p className="fw-semibold">Tech Used:</p>
          <p>Java, API Integration</p>
          <a href="#" className="btn btn-outline-primary btn-sm me-2">
            GitHub
          </a>
          <a href="#" className="btn btn-outline-success btn-sm">
            Live Demo
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">QR Code Generator</h5>
          <p className="card-text">
            A web tool that generates QR codes for websites and text inputs.
          </p>
          <p className="fw-semibold">Tech Used:</p>
          <p>HTML, CSS, JavaScript</p>
          <a href="#" className="btn btn-outline-primary btn-sm me-2">
            GitHub
          </a>
          <a href="#" className="btn btn-outline-success btn-sm">
            Live Demo
          </a>
        </div>
      </div>

    </div>
  );
}
