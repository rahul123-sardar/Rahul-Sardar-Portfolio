export default function Home() {
  return (
    <div>
      <br />
    <div className="Home d-flex justify-content-center" style={{ marginTop: "100px" }}>
      <div className="card" style={{ width: "25rem" }}>
        <img
          src="./media/images/MyImage.jpeg"
          className="card-img-top"
          alt="Card"
        />
        <div className="card-body">
          <h5 className="card-title">Rahul Sardar</h5>
          <p className="card-text">
            <ul className="list-unstyled">
            <li>💻 MERN Stack Developer</li>
            <li>🎓 BCA Student</li>
            <li>⚛️ React • Node • MongoDB</li>
            <li>🌐 HTML • CSS • JavaScript</li>
            <li>🚀 Passionate about Web Development</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
