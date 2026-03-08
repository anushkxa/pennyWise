function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 d-flex justify-content-between" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>

      <div className="row p-5 m-3">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            id="supportInput"
            type="text"
            className="form-control mb-3"
            placeholder="Eg. how to delete F&O"
          />

          <div className="d-flex flex-wrap gap-3">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>

        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="#">Current Takeover and Delisting</a>
            </li>
            <li>
              <a href="#">Latest Intraday Leverages</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;