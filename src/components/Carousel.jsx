function Carousel() {
    return (
      <div
        className="carousel-main"
        style={{ maxHeight: "300px", overflow: "hidden", width: "100%", position: "relative" }}
      >
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" style={{ height: "100%" }}>
            <div className="carousel-item active">
              <img
                src="/assets/img1.jpg"
                className="d-block w-100"
                alt="..."
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/img2.jpg"
                className="d-block w-100"
                alt="..."
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/img4.jpg"
                className="d-block w-100"
                alt="..."
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
  
          {/* Overlay Text */}
          <div
            className="carousel-overlay"
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
              zIndex: 2,
              background: "rgba(0, 0, 0, 0.5)",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            <h2 style={{ fontSize: "2rem", margin: 0 }}>Welcome to Our maXspaces</h2>
            <p style={{ fontSize: "1rem", margin: "5px 0 0" }}>
              Find your dream property today! 
            </p>
          </div>
  
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
  
  export default Carousel;
  