export default function ColumnSection() {
  return (
    <section className="content content--column">
      <div
        className="content__img"
        style={{ backgroundImage: "url(/img/1.jpg)" }}
      />
      <div
        className="content__img"
        style={{ backgroundImage: "url(/img/2.jpg)" }}
      />
      <div data-step className="content__img content__img--mid" />
      <div
        className="content__img"
        style={{ backgroundImage: "url(/img/3.jpg)" }}
      />
      <div
        className="content__img"
        style={{ backgroundImage: "url(/img/4.jpg)" }}
      />
    </section>
  );
}
