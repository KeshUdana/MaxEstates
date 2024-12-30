function Carousel() {
  return (
      <div className="carousel-main">
          <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
          >
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img
                          src="/assets/Screenshot 2024-12-26 143203.png"
                          className="d-block w-100"
                          alt="..."
                      />
                  </div>
                  <div className="carousel-item">
                      <img
                          src="/assets/Screenshot 2024-12-26 143227.png"
                          className="d-block w-100"
                          alt="..."
                      />
                  </div>
                  <div className="carousel-item">
                      <img
                          src="/assets/Screenshot 2024-12-26 143250.png"
                          className="d-block w-100"
                          alt="..."
                      />
                  </div>
                  <div className="carousel-item">
                      <img
                          src="/assets/Screenshot 2024-12-26 143303.png"
                          className="d-block w-100"
                          alt="..."
                      />
                  </div>
                  <div className="carousel-item">
                      <img
                          src="/assets/Screenshot 2024-12-26 143336.png"
                          className="d-block w-100"
                          alt="..."
                      />
                  </div>
                  <div className="carousel-item">
                      <img
                          src="/assets/Screenshot 2024-12-26 143344.png"
                          className="d-block w-100"
                          alt="..."
                      />
                  </div>
                  <div className="carousel-item">
                      <img
                          src="/assets/Screenshot 2024-12-26 143352.png"
                          className="d-block w-100"
                          alt="..."
                      />
                  </div>
                  <div className="carousel-item">
                      <img
                          src="/assets/Screenshot 2024-12-26 143626.png"
                          className="d-block w-100"
                          alt="..."
                      />
                  </div>
                  <div className="carousel-item">
                      <img
                          src="/assets/Screenshot 2024-12-26 143636.png"
                          className="d-block w-100"
                          alt="..."
                      />
                  </div>
              </div>
              <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
              >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
              >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
      </div>
  );
}

export default Carousel;