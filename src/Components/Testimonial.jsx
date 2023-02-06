const Testimonial = ({ testm }) => {
  return (
    <section className="d-flex justify-content-center">
      {/* Testimonila Loop */}
      {testm.slice(0, 5).map((tm) => {
        return (
          <section key={tm.id}>
            <div className="testmonial-img my-4 mx-4">
              <img src={tm.avatar} alt="contact-img"></img>
            </div>
            <div>
              <h4 className="fw-bold">{tm.name}</h4>
              <h6 className="fw-bold">{tm.designation}</h6>
              <p>{tm.message}</p>
            </div>
          </section>
        );
      })}
      {/* Testimonila Loop */}
    </section>
  );
};
export default Testimonial;
