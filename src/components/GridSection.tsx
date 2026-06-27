const gridImages = [
  "13.jpg", "12.jpg", "9.jpg", "7.jpg", "11.jpg", "8.jpg", "10.jpg", "6.jpg",
];

export default function GridSection() {
  return (
    <section className="content content--grid">
      <div
        className="content__img"
        style={{ backgroundImage: "url(/img/13.jpg)" }}
      />
      <div data-step className="content__img" />
      {gridImages.slice(1).map((img) => (
        <div
          key={img}
          className="content__img"
          style={{ backgroundImage: `url(/img/${img})` }}
        />
      ))}
    </section>
  );
}
