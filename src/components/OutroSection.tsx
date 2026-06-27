export default function OutroSection() {
  return (
    <section className="outro">
      <h2 className="outro__title font-alt">More you might like</h2>
      <div className="card-wrap">
        <div className="card">
          <div
            className="card__img"
            style={{ backgroundImage: "url(/img/1.jpg)" }}
          />
          <span className="card__title font-cap">The Art of Slow Fashion</span>
        </div>
        <div className="card">
          <div
            className="card__img"
            style={{ backgroundImage: "url(/img/2.jpg)" }}
          />
          <span className="card__title font-cap">From Flax to Fabric</span>
        </div>
        <div className="card">
          <div
            className="card__img"
            style={{ backgroundImage: "url(/img/3.jpg)" }}
          />
          <span className="card__title font-cap">Our Spring Collection</span>
        </div>
      </div>
    </section>
  );
}
