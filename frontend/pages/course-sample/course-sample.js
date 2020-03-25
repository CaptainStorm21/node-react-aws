const CourseSample = () => {
  const list = [
    {
      name: "Learn HTML5",
      description:
        "Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sit amet justo donec enim diam. Commodo elit at imperdiet dui accumsan. Aliquam malesuada bibendum arcu vitae. Sed blandit libero volutpat sed. In ornare quam viverra orci sagittis eu. Metus dictum at tempor commodo ullamcorper a. ",
      lastUpdated: "January 12, 2020",
      skillLevel: "Beginner",
      author: "James Watson"
    },
    {
      name: "Learn Ruby on Rails",
      description:
        "Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sit amet justo donec enim diam. Commodo elit at imperdiet dui accumsan. Aliquam malesuada bibendum arcu vitae. Sed blandit libero volutpat sed. In ornare quam viverra orci sagittis eu. Metus dictum at tempor commodo ullamcorper a. ",
      lastUpdated: "August 12, 2019",
      skillLevel: "All Levels",
      author: "Alexander Schutlz"
    },
    {
      name: "Python Easy Way",
      description:
        "Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sit amet justo donec enim diam. Commodo elit at imperdiet dui accumsan. Aliquam malesuada bibendum arcu vitae. Sed blandit libero volutpat sed. In ornare quam viverra orci sagittis eu. Metus dictum at tempor commodo ullamcorper a. ",
      lastUpdated: "August 22, 2020",
      skillLevel: "Beginner",
      author: "Laurentes Martinez"
    },
    {
        name: "C++ Ultimate Goal",
        description:
          "Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sit amet justo donec enim diam. Commodo elit at imperdiet dui accumsan. Aliquam malesuada bibendum arcu vitae. Sed blandit libero volutpat sed. In ornare quam viverra orci sagittis eu. Metus dictum at tempor commodo ullamcorper a. ",
        lastUpdated: "August 22, 2020",
        skillLevel: "All Levels",
        author: "Margarete Andersen & Kyle Krimsky"
      }
  ];

  return list.map((item, i) => {
    return (
            <div class="card">
              <small className="text-muted p-3">{item.skillLevel}</small>
              <div className = "col-md-6">
              <div alt="Title of the image" className="img-thumbnail card-img-top"></div>
              </div>
              <div className="card-body">
                <h5 className="card-title font-weight-bold color-primary">{item.name}</h5>
                <p className="lead">Author: {item.author}</p>
                <p className="card-text">{item.description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Last updated/added: {item.lastUpdated}
                  </small>
                </p>
                <button type="button" class="btn btn-info">View Course</button>
              </div>
            </div>

    );
  });
};
export default CourseSample;
