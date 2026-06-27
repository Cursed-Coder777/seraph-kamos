export default function LinesSection() {
  return (
    <section className="content content--lines">
      <h2 className="content__title content__title--medium font-alt">
        <span>Natural</span>
        <div data-step className="content__img" />
        <span>Garments</span>
      </h2>
      <h2 className="content__title content__title--medium font-alt">
        <span>Crafted with</span>
        <div
          className="content__img"
          style={{ backgroundImage: "url(/img/5.jpg)" }}
        />
        <span>love</span>
      </h2>
      <h2 className="content__title content__title--medium font-alt">
        <span>with</span>
        <div
          className="content__img"
          style={{ backgroundImage: "url(/img/4.jpg)" }}
        />
        <span>respect</span>
      </h2>
    </section>
  );
}
