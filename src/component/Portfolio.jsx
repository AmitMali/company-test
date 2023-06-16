import { useState } from "react";
const Portfolio = () => {
  const tags = ["all", "tag1", "tag2", "tag3"];
  const pholioItems = [
    {
      title: "some title",
      img: "img/portfolio1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit Accusantium voluptas unde quo sit molestiae atque voluptate incumque vel?",
      tag: ["all", "tag1"],
    },
    {
      title: "some title",
      img: "img/portfolio2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit Accusantium voluptas unde quo sit molestiae atque voluptate incumque vel?",
      tag: ["all", "tag2"],
    },
    {
      title: "some title",
      img: "img/portfolio3.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit Accusantium voluptas unde quo sit molestiae atque voluptate incumque vel?",
      tag: ["all", "tag1"],
    },
    {
      title: "some title",
      img: "img/portfolio1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit Accusantium voluptas unde quo sit molestiae atque voluptate incumque vel?",
      tag: ["all", "tag3"],
    },
    {
      title: "some title",
      img: "img/portfolio2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit Accusantium voluptas unde quo sit molestiae atque voluptate incumque vel?",
      tag: ["all", "tag3"],
    },
    {
      title: "some title",
      img: "img/portfolio3.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit Accusantium voluptas unde quo sit molestiae atque voluptate incumque vel?",
      tag: ["all", "tag2"],
    },
  ];
  const [portpholio, setPortpholio] = useState(pholioItems);

  const updatePholio = (tag) => {
    const updatedPholio = pholioItems.filter((item) => item.tag.includes(tag));
    setPortpholio(updatedPholio);
  };

  return (
    <div className="portfolio">
      <h1 className="portfolio-heading">Our Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <div className="container">
        <div className="row">
          <select onChange={(e) => updatePholio(e.target.value)}>
            {tags.map((tag, i) => {
              return (
                <option key={i} value={tag}>
                  {tag}
                </option>
              );
            })}
          </select>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-6">
          {portpholio &&
            portpholio.map((pholioItem, i) => {
              return (
                <div className="col" key={i}>
                  <div className="card">
                    <img
                      src={pholioItem.img}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{pholioItem.title}</h5>
                      <p className="card-text">{pholioItem.descriptions}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
