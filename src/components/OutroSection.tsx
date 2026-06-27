const relatedDemos = [
  {
    title:
      "Staggered (3D) Grid Animations with Scroll-Triggered Effects",
    url: "https://tympanus.net/Development/Staggered3DGridAnimations/",
    img: "https://tympanus.net/codrops/wp-content/uploads/2024/10/staggered3d-400x300.jpg",
  },
  {
    title: "Exploration of On-Scroll Layout Formations",
    url: "https://tympanus.net/Development/OnScrollLayoutFormations",
    img: "https://tympanus.net/codrops/wp-content/uploads/2024/09/onscrolllayoutformationfeat-400x300.jpg",
  },
  {
    title: "Scroll-based SVG Filter Animations on Text",
    url: "https://tympanus.net/Development/OnScrollSVGFilterText",
    img: "https://tympanus.net/codrops/wp-content/uploads/2024/08/svgfilter_text-400x300.jpg",
  },
  {
    title:
      "Experimental On-Scroll Text Animations with SVG Clip-Path",
    url: "https://tympanus.net/Development/TextClipScroll",
    img: "https://tympanus.net/codrops/wp-content/uploads/2024/01/clippathtext-400x300.jpg?x88973",
  },
  {
    title: "On-Scroll Sliced Text Animation",
    url: "https://tympanus.net/Development/SlicedTextEffect",
    img: "https://tympanus.net/codrops/wp-content/uploads/2023/12/slicedtext_feat-400x300.jpg",
  },
];

export default function OutroSection() {
  return (
    <section className="outro">
      <h2 className="outro__title font-alt">More you might like</h2>
      <div className="card-wrap">
        {relatedDemos.map((demo) => (
          <div key={demo.title} className="card">
            <a
              href={demo.url}
              className="card__img"
              style={{ backgroundImage: `url(${demo.img})` }}
            />
            <span className="card__title font-cap">
              <a href={demo.url}>{demo.title}</a>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
